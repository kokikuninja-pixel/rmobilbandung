import type { Metadata } from 'next';
import { renderAdminScreen } from '../render-admin-screen';
import { TagSettingsForm } from './tag-settings-form';
import { getSavedTagSettings } from '../actions';
import { getTagSettingsFromEnv, resolveTagSettings } from '@/lib/tag-settings';

export const metadata: Metadata = {
  title: 'Pengaturan Tag & Iklan',
  robots: { index: false, follow: false },
};

export default async function AdminSettingsPage() {
  const saved = await getSavedTagSettings();
  const fromEnv = getTagSettingsFromEnv();
  const effective = resolveTagSettings(saved);
  return renderAdminScreen(
    '/admin/settings',
    <>
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
          Tag &amp; Iklan
        </h1>
        <p className="text-muted-foreground mt-1">
          Kelola Google Tag Manager, GA4, dan Google Ads (konversi).
        </p>
      </header>

      <div className="max-w-3xl space-y-6">
        <TagSettingsForm
          defaults={{
            gtmId: effective.gtmId,
            ga4Id: effective.ga4Id,
            adsId: effective.adsId,
            conversionLabel: effective.conversionLabel,
          }}
          fromEnv={{
            gtmId: fromEnv.gtmId ?? '',
            ga4Id: fromEnv.ga4Id ?? '',
            adsId: fromEnv.adsId ?? '',
            conversionLabel: fromEnv.conversionLabel ?? '',
          }}
        />
      </div>
    </>,
  );
}
