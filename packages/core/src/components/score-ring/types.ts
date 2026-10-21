import type { WithSxProps } from '@montage-ui/engine';

export type ScoreTone = 'positive' | 'cautionary' | 'negative' | 'brand';

export type ScoreRingProps = WithSxProps<{
  /** The score. Clamped to `0..max`. */
  value: number;
  /** The maximum score. */
  max?: number;
  /** The label under the number (e.g. 종합). */
  label?: string;
  /** The diameter. */
  size?: 'small' | 'medium' | 'large';
  /** The ring color. `auto` picks positive ≥ 65, cautionary ≥ 45, otherwise negative. */
  tone?: ScoreTone | 'auto';
}>;
