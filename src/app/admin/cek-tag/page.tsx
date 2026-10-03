import type { Metadata } from 'next';
import { renderAdminScreen } from '../render-admin-screen';
import { TagVerifier } from './tag-verifier';
import { getSavedTagSettings } from '../actions';
import { resolveTagSettings } from '@/lib/tag-settings';

export const metadata: Metadata = {
  title: 'Verifikasi Tag',
  robots: { index: false, follow: false },
};

export default async function CekTagPage() {
  const saved = await getSavedTagSettings();
  const settings = resolveTagSettings(saved);

  return renderAdminScreen(
    '/admin/cek-tag',
    <>
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
          Verifikasi Tag
        </h1>
        <p className="text-muted-foreground mt-1">
          Pastikan Google Tag Manager, GA4, dan Google Ads benar-benar berjalan.
        </p>
      </header>

      <div className="max-w-3xl">
        <TagVerifier
          gtmId={settings.gtmId}
          ga4Id={settings.ga4Id}
          adsId={settings.adsId}
          conversionLabel={settings.conversionLabel}
        />
      </div>
    </>,
  );
}
