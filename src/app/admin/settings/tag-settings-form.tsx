'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, Loader2, Save, Tag, Globe, MousePointerClick, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { resetTagSettingsAction, saveTagSettingsAction, type ActionState } from '@/app/admin/actions';

const initialState: ActionState = {};

export function TagSettingsForm({
  defaults,
  fromEnv,
}: {
  defaults: { gtmId: string; ga4Id: string; adsId: string; conversionLabel: string };
  fromEnv: { gtmId: string; ga4Id: string; adsId: string; conversionLabel: string };
}) {
  const [state, formAction, pending] = useActionState(saveTagSettingsAction, initialState);
  const [resetState, resetAction, resetting] = useActionState(
    async (): Promise<{ success?: string }> => {
      const result = await resetTagSettingsAction();
      return { success: result.success ?? 'Pengaturan browser direset.' };
    },
    {},
  );

  const shown = state.success ?? resetState.success;
  const error = state.error;

  // Mirror the action result into a toast so feedback is always visible,
  // including when the inline banner is missed.
  const lastMessage = useRef<string | null>(null);
  useEffect(() => {
    const message = error ?? shown;
    if (!message || message === lastMessage.current) return;
    lastMessage.current = message;
    if (error) toast.error('Gagal menyimpan', { description: error });
    else toast.success('Berhasil', { description: message });
  }, [error, shown]);

  const envValue = (key: keyof typeof fromEnv) => fromEnv[key];

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Tag className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Google Tag Manager</CardTitle>
              <CardDescription>
                ID container GTM. Format: <code className="font-mono">GTM-XXXXXXX</code>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form action={formAction} className="space-y-6">
            <div className="grid gap-5">
              <div className="space-y-2">
                <Label htmlFor="gtmId">GTM Container ID</Label>
                <Input
                  id="gtmId"
                  name="gtmId"
                  defaultValue={defaults.gtmId}
                  placeholder="GTM-KM5GLHDW"
                />
                <p className="text-xs text-muted-foreground">
                  Ditemukan di GTM → Admin → Container → &ldquo;ID Container&rdquo; (format GTM-XXXXXXX).
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ga4Id" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Google Analytics 4 Measurement ID
                </Label>
                <Input id="ga4Id" name="ga4Id" defaultValue={defaults.ga4Id} placeholder="G-XXXXXXXXXX" />
                <p className="text-xs text-muted-foreground">
                  Opsional bila sudah pelacakan lewat GTM. Format: <code className="font-mono">G-XXXXXXXXXX</code>
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="adsId" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Google Ads ID
                </Label>
                <Input
                  id="adsId"
                  name="adsId"
                  defaultValue={defaults.adsId}
                  placeholder="AW-11380968042"
                />
                <p className="text-xs text-muted-foreground">
                  Ads &amp; remarketing → Ringkasan akun, kolom &ldquo;ID&rdquo; (format AW-123456789).
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversionLabel" className="flex items-center gap-2">
                  <MousePointerClick className="h-4 w-4" />
                  Conversion Label
                </Label>
                <Input
                  id="conversionLabel"
                  name="conversionLabel"
                  defaultValue={defaults.conversionLabel}
                  placeholder="AbC-D_efGh"
                />
                <p className="text-xs text-muted-foreground">
                  Actions → Konversi → New conversion action → Tag installation, ambil label
                  (format <code className="font-mono">AbC-D_efGh</code>). Kosongkan jika belum
                  memakai konversi.
                </p>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
              >
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            {shown && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-sm text-green-700 dark:text-green-300"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{shown}</span>
              </div>
            )}

            <div className="pt-2 border-t flex flex-wrap gap-3">
              <Button type="submit" disabled={pending} className="gap-2">
                {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {pending ? 'Menyimpan...' : 'Simpan Pengaturan'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-amber-500/30">
        <CardHeader>
          <CardTitle className="text-base">Penerapan ke Pengunjung</CardTitle>
          <CardDescription>
            Nilai di atas disimpan di browser ini (cookie). Agar berlaku untuk{' '}
            <strong>semua pengunjung</strong>, salin variabel ini ke Vercel → Settings → Environment
            Variables, lalu redeploy.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed">
{`NEXT_PUBLIC_GTM_ID=${envValue('gtmId') || defaults.gtmId || 'GTM-XXXXXXX'}
NEXT_PUBLIC_GA4_ID=${envValue('ga4Id') || defaults.ga4Id || 'G-XXXXXXXXXX'}
NEXT_PUBLIC_ADS_ID=${envValue('adsId') || defaults.adsId || 'AW-123456789'}
NEXT_PUBLIC_ADS_CONVERSION_LABEL=${
  envValue('conversionLabel') || defaults.conversionLabel || 'AbC-D_efGh'
}

ADMIN_USERNAME=admin
ADMIN_PASSWORD=ganti-dengan-password-kuat
ADMIN_SESSION_SECRET=buka-random-32-byte-di-situs-seperti-random.org`}
          </pre>
          <form action={resetAction}>
            <Button type="submit" variant="outline" size="sm" disabled={resetting} className="gap-2">
              {resetting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="h-4 w-4" />
              )}
              Reset Pengaturan Browser
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
