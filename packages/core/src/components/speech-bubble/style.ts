import { css } from '@montage-ui/engine';

import type { Theme } from '@montage-ui/engine';
import type { SpeechBubbleProps } from './types';

export const speechBubbleStyle =
  ({ tail = 'top', tone = 'paper' }: SpeechBubbleProps) =>
  (theme: Theme) => {
    const bg =
      tone === 'brand'
        ? theme.semantic.surface.brand.primary
        : theme.semantic.surface.neutral.primary;
    const fg =
      tone === 'brand'
        ? theme.semantic.static.white
        : theme.semantic.foreground.neutral.primary;
    const border =
      tone === 'brand' ? 'transparent' : theme.semantic.line.neutral.primary;
    return css`
      position: relative;
      display: inline-block;
      max-width: 320px;
      padding: 8px 14px;
      border-radius: 16px;
      border: 1px solid ${border};
      background-color: ${bg};
      color: ${fg};
      font-family: var(--font-voice);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      box-shadow: ${theme.semantic.elevation.shadow.normal.xsmall};

      ${tail !== 'none' &&
      css`
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          ${tail}: -6px;
          width: 10px;
          height: 10px;
          background-color: ${bg};
          border: 1px solid ${border};
          ${tail === 'top'
            ? 'border-right: 0; border-bottom: 0;'
            : 'border-left: 0; border-top: 0;'}
          transform: translateX(-50%) rotate(45deg);
        }
      `}
    `;
  };
