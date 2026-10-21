import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { GanjiGlyph } from '../ganji-glyph';

import { pillarChartStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { Pillar, PillarChartProps, PillarGlyph } from './types';

/** 사주 원국의 기둥(천간 위, 지지 아래)을 나란히 보여 준다. */
const PillarChart = forwardRef<
  HTMLDivElement,
  DefaultComponentPropsInternal<PillarChartProps, 'div'>
>(
  (
    {
      pillars,
      size = 'medium',
      'aria-label': ariaLabel = '사주 원국',
      ...props
    },
    ref,
  ) => (
    <Box
      as="div"
      ref={ref}
      role="group"
      aria-label={ariaLabel}
      {...props}
      sx={[pillarChartStyle(pillars.length), props.sx]}
    >
      {pillars.map((p) => (
        <div
          key={p.key}
          data-role="pillar"
          data-highlighted={p.highlighted ? 'true' : 'false'}
          aria-label={`${p.label} ${p.stem.reading}${p.branch.reading}`}
        >
          <span data-role="pillar-label">{p.label}</span>
          {p.stem.tenGod && (
            <span data-role="pillar-ten-god">{p.stem.tenGod}</span>
          )}
          <GanjiGlyph
            hanja={p.stem.hanja}
            reading={p.stem.reading}
            ohaeng={p.stem.ohaeng}
            size={size}
          />
          <GanjiGlyph
            hanja={p.branch.hanja}
            reading={p.branch.reading}
            ohaeng={p.branch.ohaeng}
            size={size}
          />
          {p.branch.tenGod && (
            <span data-role="pillar-ten-god">{p.branch.tenGod}</span>
          )}
          {p.caption && <span data-role="pillar-caption">{p.caption}</span>}
        </div>
      ))}
    </Box>
  ),
);

PillarChart.displayName = 'PillarChart';

export { PillarChart };

export type { Pillar, PillarChartProps, PillarGlyph };
