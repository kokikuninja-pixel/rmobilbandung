import { formatRupiah, PRICE_BASIS, PRICE_NOTE, type CarPricing } from '@/lib/cars';

const rows: { key: keyof CarPricing; label: string }[] = [
  { key: 'day', label: 'Per hari' },
  { key: 'week', label: 'Per minggu' },
  { key: 'month', label: 'Per bulan' },
];

export function PriceList({ pricing, showNote = false }: { pricing: CarPricing; showNote?: boolean }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">mulai dari</p>
      <p className="text-2xl font-bold text-accent">
        {formatRupiah(pricing.day)}
        <span className="text-sm font-medium text-muted-foreground"> / hari</span>
      </p>
      <p className="text-xs text-muted-foreground mb-2">{PRICE_BASIS}</p>
      <dl className="text-sm space-y-0.5">
        {rows.slice(1).map((r) => (
          <div key={r.key} className="flex justify-between gap-4">
            <dt className="text-muted-foreground">{r.label}</dt>
            <dd className="font-semibold">{formatRupiah(pricing[r.key])}</dd>
          </div>
        ))}
      </dl>
      {showNote && <p className="mt-2 text-xs text-muted-foreground">{PRICE_NOTE}</p>}
    </div>
  );
}
