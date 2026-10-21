import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { toCoordinates } from './helpers';
import { fortuneFlowStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { FortuneFlowPoint, FortuneFlowProps } from './types';

const WIDTH = 320;
const HEIGHT = 96;
const PAD = 8;

/** 날·달·해·대운의 점수 흐름을 한 줄로 보여 주고 지금 위치를 표시한다. */
const FortuneFlow = forwardRef<
  HTMLDivElement,
  DefaultComponentPropsInternal<FortuneFlowProps, 'div'>
>(
  (
    {
      points,
      highlightIndex,
      min = 0,
      max = 100,
      baseline,
      showAllLabels = false,
      area = false,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const coords = toCoordinates(
      points.map((p) => p.value),
      WIDTH,
      HEIGHT,
      PAD,
      min,
      max,
    );
    const line = coords
      .map((c, i) => `${i ? 'L' : 'M'}${c.x.toFixed(1)},${c.y.toFixed(1)}`)
      .join(' ');
    const first = coords[0];
    const last = coords.at(-1);
    const areaPath =
      first && last && coords.length > 1
        ? `${line} L${last.x.toFixed(1)},${HEIGHT - PAD} L${first.x.toFixed(1)},${HEIGHT - PAD} Z`
        : '';
    const baselineY =
      baseline === undefined
        ? null
        : (toCoordinates([baseline], WIDTH, HEIGHT, PAD, min, max)[0]?.y ??
          null);
    const marked =
      highlightIndex !== undefined && coords[highlightIndex]
        ? coords[highlightIndex]
        : null;
    const shown = points
      .map((p, i) => ({ ...p, i }))
      .filter(
        (p) =>
          showAllLabels ||
          p.i === 0 ||
          p.i === points.length - 1 ||
          p.i === highlightIndex,
      );

    return (
      <Box as="div" ref={ref} {...props} sx={[fortuneFlowStyle, props.sx]}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={ariaLabel}
        >
          <title>{points.map((p) => `${p.label} ${p.value}`).join(', ')}</title>
          {baselineY !== null && (
            <line
              data-role="flow-baseline"
              x1={PAD}
              x2={WIDTH - PAD}
              y1={baselineY}
              y2={baselineY}
            />
          )}
          {area && areaPath && <path data-role="flow-area" d={areaPath} />}
          <path data-role="flow-line" d={line} />
          {marked && (
            <g>
              <line
                data-role="flow-marker"
                x1={marked.x}
                x2={marked.x}
                y1={PAD}
                y2={HEIGHT - PAD}
              />
              <circle
                data-role="flow-dot"
                cx={marked.x}
                cy={marked.y}
                r={4.5}
              />
            </g>
          )}
        </svg>
        <div data-role="flow-labels" aria-hidden>
          {shown.map((p) => (
            <span
              key={p.i}
              data-highlighted={p.i === highlightIndex ? 'true' : 'false'}
              data-edge={
                p.i === 0
                  ? 'start'
                  : p.i === points.length - 1
                    ? 'end'
                    : undefined
              }
              style={{ left: `${((coords[p.i]?.x ?? 0) / WIDTH) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </Box>
    );
  },
);

FortuneFlow.displayName = 'FortuneFlow';

export { FortuneFlow };

export type { FortuneFlowPoint, FortuneFlowProps };
