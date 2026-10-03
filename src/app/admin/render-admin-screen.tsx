import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AdminShell } from './admin-shell';
import { ADMIN_SESSION_COOKIE, readSessionToken } from '@/lib/admin-session';

/**
 * Shared guard for the admin app screens.
 * Middleware already blocks unauthenticated requests; this is the second lock
 * so a session can never be bypassed by rendering a page directly.
 */
export async function renderAdminScreen(
  activePath: string,
  children: React.ReactNode,
) {
  const cookieStore = await cookies();
  const session = await readSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);

  if (!session) redirect('/admin/login');

  return <AdminShell activePath={activePath} username={session.username}>{children}</AdminShell>;
}
