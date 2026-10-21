import type { WithSxProps } from '@montage-ui/engine';

export type FortuneFlowPoint = {
  /** The x-axis label (e.g. 21일, 2026, 35세). */
  label: string;
  /** The score at this point. */
  value: number;
};

export type FortuneFlowProps = WithSxProps<{
  /** Points in order. */
  points: Array<FortuneFlowPoint>;
  /** Index of the point to mark (e.g. today or the current decade). */
  highlightIndex?: number;
  /** Value range of the y axis. */
  min?: number;
  max?: number;
  /** Dashed reference line value (e.g. 50 for average). */
  baseline?: number;
  /** Shows every label instead of only the first, highlighted and last. */
  showAllLabels?: boolean;
  /** Draws a soft area under the line. */
  area?: boolean;
  /** Accessible name of the chart. */
  'aria-label': string;
}>;
