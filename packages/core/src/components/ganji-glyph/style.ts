import { css } from '@montage-ui/engine';

import type { Theme } from '@montage-ui/engine';
import type { GanjiGlyphProps } from './types';

const SIZE = {
  small: { box: 40, font: 20, radius: 10, reading: 9 },
  medium: { box: 56, font: 28, radius: 12, reading: 10 },
  large: { box: 72, font: 36, radius: 16, reading: 11 },
} as const;

export const ganjiGlyphStyle =
  ({ ohaeng, size = 'medium', variant = 'soft' }: GanjiGlyphProps) =>
  (theme: Theme) => {
    const tone = theme.semantic.ohaeng[ohaeng];
    const s = SIZE[size];
    return css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: ${s.box}px;
      height: ${s.box}px;
      border-radius: ${s.radius}px;
      font-family: var(--font-serif);
      font-size: ${s.font}px;
      font-weight: 900;
      line-height: 1;
      background-color: ${variant === 'solid' ? tone.primary : tone.subtle};
      color: ${variant === 'solid' ? theme.semantic.static.white : tone.strong};
      box-shadow: inset 0 0 0 1px
        ${variant === 'solid' ? 'transparent' : tone.soft};

      [data-role='ganji-reading'] {
        position: absolute;
        right: ${Math.round(s.box * 0.08)}px;
        bottom: ${Math.round(s.box * 0.06)}px;
        font-family: var(--font-sans);
        font-size: ${s.reading}px;
        font-weight: 600;
        opacity: 0.72;
      }
    `;
  };
