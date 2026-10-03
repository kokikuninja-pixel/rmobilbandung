import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { AdminLoginForm } from '../login-form';
import { isUsingDefaultPassword } from '@/lib/admin-session';
import { ADMIN_SESSION_COOKIE, readSessionToken } from '@/lib/admin-session';

export const metadata: Metadata = {
  title: 'Login Admin',
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const cookieStore = await cookies();
  const session = await readSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
  if (session) redirect('/admin/dashboard');

  const { next } = await searchParams;
  const nextPath = next && next.startsWith('/admin') ? next : '/admin/dashboard';

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md space-y-4">
        <AdminLoginForm nextPath={nextPath} />

        {isUsingDefaultPassword() && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-700 dark:text-amber-300">
            <p className="font-semibold mb-1">⚠️ Password default masih aktif</p>
            <p>
              Set <code className="font-mono">ADMIN_PASSWORD</code> dan{' '}
              <code className="font-mono">ADMIN_SESSION_SECRET</code> di Vercel sebelum dipakai
              untuk produksi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
