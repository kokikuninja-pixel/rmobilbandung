import Link from 'next/link';
import { LayoutDashboard, Settings, ShieldCheck, Car, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getBrand } from '@/brands';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Settings, label: 'Tag & Iklan', href: '/admin/settings' },
  { icon: ShieldCheck, label: 'Verifikasi Tag', href: '/admin/cek-tag' },
];

export function AdminShell({
  children,
  activePath,
  username,
}: {
  children: React.ReactNode;
  activePath: string;
  username: string;
}) {
  const brand = getBrand();

  return (
    <div className="min-h-screen bg-muted/20 flex">
      <aside className="w-64 bg-foreground text-background hidden md:flex flex-col shrink-0">
        <div className="p-6 border-b border-background/10">
          <h2 className="text-xl font-display font-bold text-primary">{brand.shortName} Admin</h2>
          <p className="text-xs text-background/50 mt-1">Masuk sebagai {username}</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                'w-full justify-start gap-3 transition-colors',
                activePath === item.href
                  ? 'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary'
                  : 'text-background/70 hover:text-primary hover:bg-background/5',
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="p-4 border-t border-background/10 space-y-2">
          <Button variant="ghost" asChild className="w-full justify-start gap-3 text-background/70 hover:text-primary">
            <Link href="/">
              <Car className="h-5 w-5" />
              Lihat Situs
            </Link>
          </Button>
          <form action="/admin/logout" method="post">
            <Button
              type="submit"
              variant="ghost"
              className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-5 w-5" />
              Keluar
            </Button>
          </form>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile nav */}
        <div className="md:hidden bg-foreground text-background p-4 flex items-center justify-between gap-2 flex-wrap">
          <span className="font-display font-bold text-primary">{brand.shortName} Admin</span>
          <div className="flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  'text-background/80 hover:text-primary px-2',
                  activePath === item.href && 'text-primary',
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <form action="/admin/logout" method="post">
              <Button type="submit" variant="ghost" size="sm" className="text-destructive">
                Keluar
              </Button>
            </form>
          </div>
        </div>
        <main className="flex-1 p-4 sm:p-6 md:p-10 min-w-0">{children}</main>
      </div>
    </div>
  );
}
