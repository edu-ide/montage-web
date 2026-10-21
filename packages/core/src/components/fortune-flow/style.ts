import { css } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';

export const fortuneFlowStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  [data-role='flow-line'] {
    fill: none;
    stroke: ${theme.semantic.surface.brand.primary};
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  [data-role='flow-area'] {
    fill: ${theme.semantic.surface.brand.subtle};
  }

  [data-role='flow-baseline'] {
    stroke: ${theme.semantic.line.neutral.primary};
    stroke-dasharray: 3 4;
  }

  [data-role='flow-marker'] {
    stroke: ${theme.semantic.foreground.negative.primary};
    stroke-dasharray: 2 3;
  }

  [data-role='flow-dot'] {
    fill: ${theme.semantic.foreground.negative.primary};
    stroke: ${theme.semantic.surface.neutral.primary};
    stroke-width: 2;
  }

  [data-role='flow-labels'] {
    position: relative;
    height: 16px;
    ${typographyStyle('caption2', 'regular')}
    color: ${theme.semantic.foreground.neutral.tertiary};

    span {
      position: absolute;
      transform: translateX(-50%);
      white-space: nowrap;
    }

    span[data-edge='start'] {
      transform: none;
    }

    span[data-edge='end'] {
      transform: translateX(-100%);
    }

    span[data-highlighted='true'] {
      color: ${theme.semantic.foreground.negative.primary};
      font-weight: 700;
    }
  }
`;
