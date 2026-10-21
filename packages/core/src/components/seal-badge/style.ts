import { css } from '@montage-ui/engine';

import type { Theme } from '@montage-ui/engine';
import type { SealBadgeProps } from './types';

const SIZE = { small: 36, medium: 56, large: 88 } as const;

export const sealBadgeStyle =
  ({
    shape = 'round',
    size = 'medium',
    variant = 'solid',
    tilt = true,
  }: Omit<SealBadgeProps, 'children'>) =>
  (theme: Theme) => {
    const d = SIZE[size];
    const red = theme.semantic.foreground.negative.primary;
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: ${d}px;
      height: ${d}px;
      padding: ${Math.round(d * 0.12)}px;
      border-radius: ${shape === 'round' ? '50%' : `${Math.round(d * 0.14)}px`};
      font-family: var(--font-serif);
      font-size: ${Math.round(d * 0.3)}px;
      font-weight: 900;
      line-height: 1.05;
      text-align: center;
      word-break: keep-all;
      transform: ${tilt ? 'rotate(-8deg)' : 'none'};
      color: ${variant === 'solid' ? theme.semantic.static.white : red};
      background-color: ${variant === 'solid' ? red : 'transparent'};
      box-shadow: inset 0 0 0 ${Math.max(2, Math.round(d * 0.05))}px
        ${variant === 'solid'
          ? theme.semantic.effect.transparent.secondary
          : red};
    `;
  };
