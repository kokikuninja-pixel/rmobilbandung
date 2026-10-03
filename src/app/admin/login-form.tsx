'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { loginAction, type ActionState } from '@/app/admin/actions';

const initialState: ActionState = {};

export function AdminLoginForm({ nextPath }: { nextPath: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-display font-bold">Admin RMB</CardTitle>
        <CardDescription>Masuk untuk mengelola tag & iklan situs</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="next" value={nextPath} />

          {state.error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="username"
                name="username"
                autoComplete="username"
                className="pl-10"
                placeholder="admin"
                required
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Memproses...
              </>
            ) : (
              'Masuk Dashboard'
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Button variant="link" asChild size="sm">
            <Link href="/">Kembali ke Situs Utama</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
