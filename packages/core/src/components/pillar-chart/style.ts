import { css } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';

export const pillarChartStyle = (count: number) => (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(${count}, minmax(0, 1fr));
  gap: 8px;

  [data-role='pillar'] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 0;
    border-radius: 14px;
  }

  [data-role='pillar'][data-highlighted='true'] {
    background-color: ${theme.semantic.surface.brand.subtle};
    box-shadow: inset 0 0 0 1px ${theme.semantic.line.brand.primary};
  }

  [data-role='pillar-label'] {
    ${typographyStyle('caption1', 'medium')}
    color: ${theme.semantic.foreground.neutral.tertiary};
  }

  [data-role='pillar-ten-god'] {
    ${typographyStyle('caption1', 'bold')}
    color: ${theme.semantic.foreground.neutral.secondary};
  }

  [data-role='pillar-caption'] {
    ${typographyStyle('caption2', 'regular')}
    color: ${theme.semantic.foreground.neutral.tertiary};
  }
`;
