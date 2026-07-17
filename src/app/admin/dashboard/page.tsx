'use client';

import { motorInventory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Bike, 
  Settings, 
  LogOut, 
  Plus, 
  Search,
  TrendingUp,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground text-background hidden md:flex flex-col border-r">
        <div className="p-6 border-b border-background/10">
          <h2 className="text-xl font-display font-bold text-primary">RMB Admin</h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/10 text-primary">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-background/70 hover:text-primary">
            <Bike className="h-5 w-5" />
            Kelola Armada
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-background/70 hover:text-primary">
            <Users className="h-5 w-5" />
            Data Pelanggan
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-background/70 hover:text-primary">
            <Settings className="h-5 w-5" />
            Pengaturan
          </Button>
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
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Ringkasan status rental Anda hari ini.</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-5 w-5" />
            Tambah Unit Baru
          </Button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Armada</CardTitle>
              <Bike className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{motorInventory.length} Unit</div>
              <p className="text-xs text-muted-foreground mt-1">+2 unit baru bulan ini</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Estimasi Pesanan</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12 Pesanan</div>
              <p className="text-xs text-muted-foreground mt-1">Menunggu konfirmasi WA</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pelanggan Aktif</CardTitle>
              <Users className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8 Pengguna</div>
              <p className="text-xs text-muted-foreground mt-1">Sedang di jalan</p>
            </CardContent>
          </Card>
        </div>

        {/* Fleet List */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
             <h2 className="text-xl font-bold">Status Unit Saat Ini</h2>
             <div className="relative flex-grow max-w-sm ml-auto">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Cari unit..." className="pl-9 h-10" />
             </div>
          </div>
          
          <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-muted/50 border-b text-sm font-medium uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Unit Motor</th>
                  <th className="px-6 py-4">Kelas</th>
                  <th className="px-6 py-4">Harga/Hari</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {motorInventory.slice(0, 10).map((motor) => (
                  <tr key={motor.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-semibold">{motor.name}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline">{motor.class}</Badge>
                    </td>
                    <td className="px-6 py-4 text-primary font-bold">
                      Rp {motor.price.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-primary">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center pt-4">
             <Button variant="outline" className="text-muted-foreground">Lihat Semua Armada</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
