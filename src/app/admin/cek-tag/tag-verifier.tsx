'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  MousePointerClick,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

type Check = {
  label: string;
  detail: string;
  status: 'ok' | 'fail' | 'pending';
};

function detect(gtmId: string, ga4Id: string, adsId: string): Check[] {
  const w = window;
  const checks: Check[] = [];

  checks.push({
    label: 'dataLayer tersedia',
    detail: 'Wadah event yang dibaca GTM & gtag.js',
    status: Array.isArray(w.dataLayer) ? 'ok' : 'fail',
  });

  checks.push({
    label: 'fungsi gtag() termuat',
    detail: 'Dibuat oleh GoogleTags (GA4 / Ads)',
    status: typeof w.gtag === 'function' ? 'ok' : 'fail',
  });

  const hasGtmScript = Boolean(
    document.querySelector(
      `script[src*="googletagmanager.com/gtm.js"][src*="${gtmId}"]`,
    ),
  );
  const hasGtmIframe = Boolean(
    document.querySelector(`iframe[src*="googletagmanager.com/ns.html"][src*="${gtmId}"]`),
  );
  if (gtmId) {
    checks.push({
      label: 'Script GTM termuat',
      detail: hasGtmScript
        ? `gtm.js dengan ID ${gtmId} ditemukan`
        : `gtm.js untuk ${gtmId} belum ditemukan (GTM dimuat lewat @next/third-parties)`,
      status: hasGtmScript || hasGtmIframe ? 'ok' : 'fail',
    });
  }

  if (ga4Id) {
    const ok = Array.isArray(w.dataLayer) && w.dataLayer.length > 0;
    checks.push({
      label: `GA4 (${ga4Id}) terkonfigurasi`,
      detail: ok ? 'Event config terkirim ke dataLayer' : 'Belum ada event di dataLayer',
      status: ok ? 'ok' : 'pending',
    });
  }

  if (adsId) {
    const ok = Array.isArray(w.dataLayer) && w.dataLayer.length > 0;
    checks.push({
      label: `Google Ads (${adsId}) terkonfigurasi`,
      detail: ok ? 'Event config terkirim ke dataLayer' : 'Belum ada event di dataLayer',
      status: ok ? 'ok' : 'pending',
    });
  }

  return checks;
}

export function TagVerifier({
  gtmId,
  ga4Id,
  adsId,
  conversionLabel,
}: {
  gtmId: string;
  ga4Id: string;
  adsId: string;
  conversionLabel: string;
}) {
  const [checks, setChecks] = useState<Check[]>([]);
  const [events, setEvents] = useState<number>(0);
  const [fired, setFired] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  const runDetection = () => {
    setChecks(detect(gtmId, ga4Id, adsId));
    setEvents(Array.isArray(window.dataLayer) ? window.dataLayer.length : 0);
    setReady(true);
  };

  useEffect(() => {
    const t = setTimeout(runDetection, 1500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pushEvent = (name: string, params?: Record<string, unknown>) => {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') window.gtag('event', name, params ?? {});
    else window.dataLayer.push({ event: name, ...params });
    setEvents(Array.isArray(window.dataLayer) ? window.dataLayer.length : 0);
    setFired((prev) => [...prev, name]);
  };

  const fireConversion = () => {
    if (!conversionLabel) {
      pushEvent('conversion_noop');
      return;
    }
    pushEvent('conversion', { send_to: conversionLabel, value: 1, currency: 'IDR' });
  };

  const allOk = checks.length > 0 && checks.every((c) => c.status === 'ok');

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <CardTitle className="flex items-center gap-2">
                {ready ? (
                  allOk ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Semua Tag Aktif
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-amber-600" />
                      Perlu Diperiksa
                    </>
                  )
                ) : (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    Memeriksa...
                  </>
                )}
              </CardTitle>
              <CardDescription>
                Halaman ini memeriksa tag langsung di browser Anda.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={runDetection} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Periksa Ulang
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {checks.map((check) => (
            <div
              key={check.label}
              className="flex items-start gap-3 rounded-lg border p-3 text-sm"
            >
              {check.status === 'ok' ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              ) : check.status === 'fail' ? (
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              ) : (
                <Loader2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium">{check.label}</p>
                <p className="text-xs text-muted-foreground">{check.detail}</p>
              </div>
            </div>
          ))}
          {!ready && <p className="text-sm text-muted-foreground">Memuat pemeriksaan...</p>}
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Kirim Event Uji</CardTitle>
          <CardDescription>
            Klik tombol di bawah, lalu buka Google Tag Assistant atau DebugView GTM untuk
            melihat event masuk secara real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => pushEvent('page_view', { page_path: location.pathname })} className="gap-2">
              <Send className="h-4 w-4" />
              Event page_view
            </Button>
            <Button
              onClick={() => pushEvent('generate_lead', { method: 'whatsapp_test' })}
              variant="outline"
              className="gap-2"
            >
              <MousePointerClick className="h-4 w-4" />
              Event generate_lead
            </Button>
            <Button onClick={fireConversion} variant="secondary" className="gap-2">
              <Send className="h-4 w-4" />
              Test Konversi
            </Button>
          </div>

          <div className="rounded-lg bg-muted p-4 text-xs space-y-1">
            <p>
              <strong>Event di dataLayer:</strong> {events}
            </p>
            {fired.length > 0 && (
              <p className="text-muted-foreground">Dikirim: {fired.join(', ')}</p>
            )}
            {!conversionLabel && (
              <p className="text-amber-600 dark:text-amber-400">
                Conversion label belum diisi — event dikirim tanpa send_to. Isi di{' '}
                <strong>Tag &amp; Iklan</strong> agar terhubung ke Google Ads.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Konfirmasi di Sisi Google</CardTitle>
          <CardDescription>Cara memastikan tag benar-benar tercatat.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="space-y-2">
            <p className="font-semibold">1. Google Tag Assistant</p>
            <p className="text-muted-foreground">
              Pasang extension Tag Assistant, buka situs Anda, lalu klik ikon extension. Pastikan
              GTM / GA4 / Google Ads tampil berstatus hijau (Connected).
            </p>
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a
                href="https://chrome.google.com/webstore/detail/tag-assistant-by-google/cnkdcccgecekianmhljsfilgoikgckif"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pasang Tag Assistant
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="space-y-2 border-t pt-4">
            <p className="font-semibold">2. GTM Preview &amp; DebugView</p>
            <p className="text-muted-foreground">
              Di GTM → Preview, masukkan URL situs Anda, lalu klik tag untuk melihat tag mana yang
              fired. Untuk event real-time, buka menu Preview → DebugView.
            </p>
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a
                href="https://tagmanager.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buka Google Tag Manager
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="space-y-2 border-t pt-4">
            <p className="font-semibold">3. Google Ads Diagnostics</p>
            <p className="text-muted-foreground">
              Di Google Ads → Tools → Diagnostics, jalankan “Setup diagnostics”. Ikuti
              Performance checklist hingga Conversion tracking menunjukkan setup Anda.
            </p>
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer">
                Buka Google Ads
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="space-y-2 border-t pt-4">
            <p className="font-semibold">4. GA4 Realtime</p>
            <p className="text-muted-foreground">
              Buka GA4 → Reports → Realtime. Muat situs ini dalam 30 menit terakhir; bila
              angka muncul, pemasangan berhasil.
            </p>
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                Buka Google Analytics
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
