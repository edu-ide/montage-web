import type { WithSxProps } from '@montage-ui/engine';
import type { Ohaeng } from '../ganji-glyph/types';

export type OhaengBalanceProps = WithSxProps<{
  /** Count (or weight) of each phase. Missing phases count as 0. */
  values: Partial<Record<Ohaeng, number>>;
  /** Text shown instead of 0 so an absent phase is noticed. */
  emptyLabel?: string;
  /** Formats a non-zero value. */
  formatValue?: (value: number) => string;
  /** Accessible name of the chart. */
  'aria-label'?: string;
}>;
