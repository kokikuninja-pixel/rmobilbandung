import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Settings, ShieldCheck, TrendingUp } from 'lucide-react';
import { carInventory } from '@/lib/cars';
import { renderAdminScreen } from '../render-admin-screen';
import { getSavedTagSettings } from '../actions';
import { getTagSettingsFromEnv, resolveTagSettings } from '@/lib/tag-settings';

export const metadata: Metadata = {
  title: 'Dashboard Admin',
  robots: { index: false, follow: false },
};

export default async function AdminDashboard() {
  const saved = await getSavedTagSettings();
  const fromEnv = getTagSettingsFromEnv();
  const settings = resolveTagSettings(saved);

  const cards = [
    {
      title: 'Total Armada',
      value: `${carInventory.length} Unit`,
      note: 'Unit aktif siap disewakan',
      icon: Car,
      tone: 'text-primary',
    },
    {
      title: 'Google Tag Manager',
      value: settings.gtmId || 'Belum diisi',
      note: fromEnv.gtmId ? 'Sumber: environment variable' : 'Sumber: pengaturan browser',
      icon: ShieldCheck,
      tone: 'text-green-600',
    },
    {
      title: 'Google Ads',
      value: settings.adsId || 'Belum diisi',
      note: settings.conversionLabel ? 'Conversion label aktif' : 'Conversion label belum diisi',
      icon: TrendingUp,
      tone: 'text-blue-600',
    },
  ];

  return renderAdminScreen(
    '/admin/dashboard',
    <>
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Ringkasan armada dan status tag iklan.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/admin/cek-tag">
              <ShieldCheck className="h-4 w-4" />
              Verifikasi Tag
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link href="/admin/settings">
              <Settings className="h-4 w-4" />
              Tag &amp; Iklan
            </Link>
          </Button>
        </div>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.tone}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold break-all">{card.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{card.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Armada Aktif</CardTitle>
          <CardDescription>Daftar unit yang tampil di situs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted/50 border-b text-sm font-medium uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Unit Mobil</th>
                  <th className="px-4 py-3">Segment</th>
                  <th className="px-4 py-3">Kursi</th>
                  <th className="px-4 py-3">Transmisi</th>
                  <th className="px-4 py-3 text-right">Harga</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {carInventory.map((car) => (
                  <tr key={car.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-semibold">{car.name}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{car.segment}</Badge>
                    </td>
                    <td className="px-4 py-3">{car.seats}</td>
                    <td className="px-4 py-3">{car.transmission}</td>
                    <td className="px-4 py-3 text-right text-primary font-semibold">Rp {car.pricing.day.toLocaleString('id-ID')} / hari</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>,
  );
}
