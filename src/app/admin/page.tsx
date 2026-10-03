import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { AdminLoginForm } from './login-form';
import { isUsingDefaultPassword } from '@/lib/admin-session';
import { ADMIN_SESSION_COOKIE, readSessionToken } from '@/lib/admin-session';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Login Admin',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = await readSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
  if (session) redirect('/admin/dashboard');

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md space-y-4">
        <AdminLoginForm nextPath="/admin/dashboard" />
        {isUsingDefaultPassword() && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-700 dark:text-amber-300">
            <p className="font-semibold mb-1">⚠️ Password default masih aktif</p>
            <p>
              Set <code className="font-mono">ADMIN_PASSWORD</code> di Vercel sebelum
              dipakai untuk produksi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
