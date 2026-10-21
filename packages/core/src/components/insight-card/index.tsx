import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { insightCardStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { InsightCardProps, InsightContent, InsightTone } from './types';

const Body = ({ content }: { content: InsightContent }) => {
  switch (content.kind) {
    case 'keywords':
      return (
        <ul data-kind="keywords">
          {content.items.map((k) => (
            <li key={k.label} data-role="keyword">
              <span data-role="keyword-label">{k.label}</span>
              {k.detail && <span data-role="keyword-detail">{k.detail}</span>}
            </li>
          ))}
        </ul>
      );
    case 'compare':
      return (
        <div data-kind="compare">
          {(['left', 'right'] as const).map((side) => (
            <section
              key={side}
              data-role="compare-side"
              data-side={side}
              aria-label={content[side].label}
            >
              <span data-role="compare-label">{content[side].label}</span>
              <ul>
                {content[side].points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    case 'timeline':
      return (
        <ol data-kind="timeline">
          {content.items.map((t) => (
            <li
              key={`${t.when}-${t.text}`}
              data-role="timeline-item"
              data-tone={t.tone ?? 'neutral'}
            >
              <span data-role="timeline-when">{t.when}</span>
              <span data-role="timeline-text">{t.text}</span>
            </li>
          ))}
        </ol>
      );
    case 'checklist':
      return (
        <ul data-kind="checklist">
          {content.items.map((c, i) => (
            <li key={c} data-role="check-item">
              <span data-role="check-mark" aria-hidden>
                {i + 1}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      );
  }
};

/** 글로 된 풀이를 한 장의 그림(키워드·비교·흐름·체크리스트)으로 요약한다. 점수는 담지 않는다. */
const InsightCard = forwardRef<
  HTMLElement,
  DefaultComponentPropsInternal<InsightCardProps, 'section'>
>(({ eyebrow, title, content, ...props }, ref) => (
  <Box
    as="section"
    ref={ref}
    aria-label={title}
    data-kind-root={content.kind}
    {...props}
    sx={[insightCardStyle, props.sx]}
  >
    <header>
      {eyebrow && <span data-role="insight-eyebrow">{eyebrow}</span>}
      <h3 data-role="insight-title">{title}</h3>
    </header>
    <Body content={content} />
  </Box>
));

InsightCard.displayName = 'InsightCard';

export { InsightCard };

export type { InsightCardProps, InsightContent, InsightTone };
