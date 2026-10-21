import type { ScoreTone } from './types';

export const clampScore = (value: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : 0, 0), max);

/** 100점 기준으로 65 이상 좋음, 45 이상 보통, 그 밑은 주의. */
export const autoTone = (value: number, max: number): ScoreTone => {
  const ratio = value / max;
  if (ratio >= 0.65) return 'positive';
  if (ratio >= 0.45) return 'cautionary';
  return 'negative';
};
