import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, readSessionToken } from '@/lib/admin-session';

/**
 * Guard every /admin route. Only /admin (login) stays public.
 * Session tokens are HMAC signed, so verification works in the Edge runtime.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLoginRoute = pathname === '/admin' || pathname === '/admin/login';
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const session = await readSessionToken(token);

  if (isLoginRoute) {
    // Already signed in? Skip the login screen.
    if (session) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL('/admin/login', request.url);
    // Preserve where they wanted to go.
    if (pathname !== '/admin') loginUrl.searchParams.set('next', pathname);
    const response = NextResponse.redirect(loginUrl);
    if (token) response.cookies.delete(ADMIN_SESSION_COOKIE);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/login', '/admin/dashboard', '/admin/settings', '/admin/cek-tag'],
};
