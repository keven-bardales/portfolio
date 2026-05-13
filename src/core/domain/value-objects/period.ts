import type { Locale } from '@/core/i18n/locales';

export interface Period {
  readonly startYear: number;
  readonly startMonth: number;
  readonly endYear: number | null;
  readonly endMonth: number | null;
}

const MONTHS_EN = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

const MONTHS_ES = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
] as const;

export function formatPeriod(
  period: Period,
  locale: Locale,
  presentLabel: string,
): string {
  const months = locale === 'es' ? MONTHS_ES : MONTHS_EN;
  const start = `${months[period.startMonth - 1]} ${period.startYear}`;
  const end =
    period.endYear === null
      ? presentLabel
      : `${months[(period.endMonth ?? 1) - 1]} ${period.endYear}`;
  return `${start} – ${end}`;
}
