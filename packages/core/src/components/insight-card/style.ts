import { css } from '@montage-ui/engine';

import { typographyStyle } from '../../utils/typography';

import type { Theme } from '@montage-ui/engine';

export const insightCardStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid ${theme.semantic.line.neutral.primary};
  background-color: ${theme.semantic.surface.neutral.primary};

  [data-role='insight-eyebrow'] {
    display: block;
    margin-bottom: 2px;
    ${typographyStyle('caption1', 'bold')}
    letter-spacing: 0.12em;
    color: ${theme.semantic.foreground.negative.primary};
  }

  [data-role='insight-title'] {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 17px;
    font-weight: 700;
    color: ${theme.semantic.foreground.neutral.primary};
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* keywords */
  [data-kind='keywords'] {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
  }
  [data-role='keyword'] {
    padding: 12px;
    border-radius: 14px;
    background-color: ${theme.semantic.surface.brand.subtle};
  }
  [data-role='keyword-label'] {
    display: block;
    font-family: var(--font-serif);
    font-size: 16px;
    font-weight: 700;
    color: ${theme.semantic.foreground.brand.primary};
  }
  [data-role='keyword-detail'] {
    display: block;
    margin-top: 4px;
    ${typographyStyle('label1', 'regular')}
    color: ${theme.semantic.foreground.neutral.secondary};
  }

  /* compare */
  [data-kind='compare'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  [data-role='compare-side'] {
    padding: 12px;
    border-radius: 14px;
    background-color: ${theme.semantic.surface.neutral.secondary};
  }
  [data-role='compare-side'][data-side='right'] {
    background-color: ${theme.semantic.surface.negative.primary};
  }
  [data-role='compare-label'] {
    display: block;
    margin-bottom: 6px;
    ${typographyStyle('label1', 'bold')}
    color: ${theme.semantic.foreground.neutral.primary};
  }
  [data-role='compare-side'] li {
    ${typographyStyle('label1', 'regular')}
    color: ${theme.semantic.foreground.neutral.secondary};
    padding-left: 12px;
    position: relative;
  }
  [data-role='compare-side'] li::before {
    content: '·';
    position: absolute;
    left: 2px;
  }

  /* timeline */
  [data-kind='timeline'] {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-left: 2px solid ${theme.semantic.line.neutral.primary};
    margin-left: 6px;
    padding-left: 14px;
  }
  [data-role='timeline-item'] {
    position: relative;
  }
  [data-role='timeline-item']::before {
    content: '';
    position: absolute;
    left: -21px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${theme.semantic.surface.neutral.primary};
    border: 3px solid ${theme.semantic.line.neutral.primary};
  }
  [data-role='timeline-item'][data-tone='good']::before {
    border-color: ${theme.semantic.ohaeng.wood.primary};
  }
  [data-role='timeline-item'][data-tone='caution']::before {
    border-color: ${theme.semantic.foreground.negative.primary};
  }
  [data-role='timeline-when'] {
    display: block;
    ${typographyStyle('caption1', 'bold')}
    color: ${theme.semantic.foreground.neutral.tertiary};
  }
  [data-role='timeline-text'] {
    ${typographyStyle('label1', 'regular')}
    color: ${theme.semantic.foreground.neutral.primary};
  }

  /* checklist */
  [data-kind='checklist'] {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  [data-role='check-item'] {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    ${typographyStyle('label1', 'regular')}
    color: ${theme.semantic.foreground.neutral.primary};
  }
  [data-role='check-mark'] {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: ${theme.semantic.static.white};
    background-color: ${theme.semantic.surface.brand.primary};
  }
`;
