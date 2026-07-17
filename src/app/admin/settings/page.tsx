'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  LayoutDashboard, 
  Bike, 
  Settings, 
  LogOut, 
  Save,
  Tag,
  BarChart3,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function AdminSettings() {
  const pathname = usePathname();
  const [isSaving, setIsLoading] = useState(false);
  
  // Data dummy yang biasanya diambil dari env atau database
  const [gtmId, setGtmId] = useState('GTM-KM5GLHDW');
  const [adsId, setAdsId] = useState('AW-11380968042');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Bike, label: 'Kelola Armada', href: '#' },
    { icon: Users, label: 'Data Pelanggan', href: '#' },
    { icon: Settings, label: 'Pengaturan', href: '/admin/settings' },
  ];

  const handleSaveAnalytics = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi penyimpanan ke database
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Pengaturan Berhasil Disimpan', {
        description: 'ID Analitik Anda telah diperbarui di sistem.',
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Sidebar (Sama seperti dashboard) */}
      <aside className="w-64 bg-foreground text-background hidden md:flex flex-col border-r">
        <div className="p-6 border-b border-background/10">
          <h2 className="text-xl font-display font-bold text-primary">RMB Admin</h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => (
            <Button 
              key={item.label}
              variant="ghost" 
              asChild
              className={cn(
                "w-full justify-start gap-3 transition-colors",
                pathname === item.href 
                  ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary" 
                  : "text-background/70 hover:text-primary hover:bg-background/5"
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="p-4 border-t border-background/10">
          <Button variant="ghost" asChild className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10">
            <Link href="/admin">
              <LogOut className="h-5 w-5" />
              Keluar
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Pengaturan</h1>
          <p className="text-muted-foreground">Kelola konfigurasi teknis situs Anda.</p>
        </header>

        <div className="grid gap-8 max-w-4xl">
          {/* Analytics Settings */}
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Analitik & Pelacakan</CardTitle>
                  <CardDescription>Konfigurasi Google Tag Manager dan Google Ads.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveAnalytics} className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gtm-id" className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      Google Tag Manager ID
                    </Label>
                    <Input 
                      id="gtm-id" 
                      placeholder="GTM-XXXXXX" 
                      value={gtmId}
                      onChange={(e) => setGtmId(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">ID utama untuk semua pelacakan tag di situs.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ads-id" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Google Ads ID (gtag.js)
                    </Label>
                    <Input 
                      id="ads-id" 
                      placeholder="AW-XXXXXXXXX" 
                      value={adsId}
                      onChange={(e) => setAdsId(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">ID khusus untuk konversi iklan Google Ads.</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button type="submit" disabled={isSaving} className="gap-2">
                    {isSaving ? 'Menyimpan...' : (
                      <>
                        <Save className="h-4 w-4" />
                        Simpan Perubahan
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Site Configuration Placeholder */}
          <Card className="shadow-sm opacity-60">
            <CardHeader>
              <CardTitle>Konfigurasi SEO</CardTitle>
              <CardDescription>Segera hadir: Kelola meta tag dan deskripsi halaman secara dinamis.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-20 border-2 border-dashed rounded-lg flex items-center justify-center text-muted-foreground italic">
                Modul ini sedang dalam pengembangan
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}