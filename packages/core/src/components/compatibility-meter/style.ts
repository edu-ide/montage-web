import { css } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';

export const compatibilityMeterStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 8px;

  [data-role='compat-person'] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  [data-role='compat-name'] {
    ${typographyStyle('label1', 'bold')}
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.semantic.foreground.neutral.primary};
  }

  [data-role='compat-center'] {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  [data-role='compat-center']::before {
    content: '';
    position: absolute;
    top: 32px;
    left: -40px;
    right: -40px;
    border-top: 1px dashed ${theme.semantic.line.neutral.primary};
    z-index: 0;
  }

  [data-role='compat-center'] > * {
    position: relative;
    z-index: 1;
    background-color: ${theme.semantic.surface.neutral.primary};
    border-radius: 999px;
  }

  [data-role='compat-relation'] {
    ${typographyStyle('caption1', 'bold')}
    padding: 2px 10px;
    color: ${theme.semantic.foreground.brand.primary};
    background-color: ${theme.semantic.surface.brand.subtle};
  }
`;
