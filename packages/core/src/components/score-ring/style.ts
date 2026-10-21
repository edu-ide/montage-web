import { css } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';
import type { ScoreTone } from './types';

export const SCORE_RING_SIZE = { small: 64, medium: 96, large: 128 } as const;

export const toneColor = (theme: Theme, tone: ScoreTone) =>
  tone === 'brand'
    ? theme.semantic.surface.brand.primary
    : theme.semantic.foreground[tone].primary;

export const scoreRingStyle = (diameter: number) => (theme: Theme) => css`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  width: ${diameter}px;
  height: ${diameter}px;

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  [data-role='score-track'] {
    stroke: ${theme.semantic.surface.neutral.secondary};
  }

  [data-role='score-arc'] {
    transition: stroke-dashoffset 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  [data-role='score-center'] {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  [data-role='score-value'] {
    font-family: var(--font-serif);
    font-size: ${Math.round(diameter * 0.33)}px;
    font-weight: 900;
    line-height: 1;
    color: ${theme.semantic.foreground.neutral.primary};
  }

  [data-role='score-label'] {
    ${typographyStyle('caption1', 'medium')}
    color: ${theme.semantic.foreground.neutral.tertiary};
  }
`;
