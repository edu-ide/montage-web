import type { WithSxProps } from '@montage-ui/engine';
import type { Ohaeng } from '../ganji-glyph/types';

export type PillarGlyph = {
  /** The hanja character (e.g. 庚). */
  hanja: string;
  /** The reading (e.g. 경). */
  reading: string;
  /** The five-element phase of the character. */
  ohaeng: Ohaeng;
  /** The ten-god label shown next to the character (e.g. 비견). */
  tenGod?: string;
};

export type Pillar = {
  /** Stable key, e.g. `hour`, `day`, `month`, `year`. */
  key: string;
  /** The column label (e.g. 시주). */
  label: string;
  /** The heavenly stem. */
  stem: PillarGlyph;
  /** The earthly branch. */
  branch: PillarGlyph;
  /** Small caption under the column (e.g. 12운성). */
  caption?: string;
  /** Highlights the column, usually the day pillar (the person). */
  highlighted?: boolean;
};

export type PillarChartProps = WithSxProps<{
  /** The pillars in display order (traditionally hour, day, month, year). */
  pillars: Array<Pillar>;
  /** The size of each glyph. */
  size?: 'small' | 'medium' | 'large';
  /** Accessible name of the chart. */
  'aria-label'?: string;
}>;
