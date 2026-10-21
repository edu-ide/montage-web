import { css, keyframes } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';

const grow = keyframes`
  from { transform: scaleX(0); }
`;

export const ohaengBalanceStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  [data-role='ohaeng-row'] {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr) 36px;
    align-items: center;
    gap: 10px;
  }

  [data-role='ohaeng-name'] {
    font-family: var(--font-serif);
    font-size: 17px;
    font-weight: 900;

    small {
      margin-left: 2px;
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 500;
    }
  }

  [data-role='ohaeng-track'] {
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${theme.semantic.surface.neutral.secondary};
  }

  [data-role='ohaeng-bar'] {
    display: block;
    height: 100%;
    border-radius: 5px;
    transform-origin: left;
    animation: ${grow} 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  [data-role='ohaeng-value'] {
    ${typographyStyle('label2', 'bold')}
    text-align: right;
    color: ${theme.semantic.foreground.neutral.secondary};
  }

  [data-role='ohaeng-value'][data-empty='true'] {
    color: ${theme.semantic.foreground.negative.primary};
  }
`;
