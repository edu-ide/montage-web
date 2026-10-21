import { forwardRef } from 'react';
import { Box, useTheme } from '@montage-ui/engine';

import { autoTone, clampScore } from './helpers';
import { SCORE_RING_SIZE, scoreRingStyle, toneColor } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { ScoreRingProps, ScoreTone } from './types';

/** 점수 하나를 원 둘레로 보여 준다(일진 종합 점수, 궁합 점수 등). */
const ScoreRing = forwardRef<
  HTMLDivElement,
  DefaultComponentPropsInternal<ScoreRingProps, 'div'>
>(
  (
    { value, max = 100, label, size = 'medium', tone = 'auto', ...props },
    ref,
  ) => {
    const theme = useTheme();
    const v = clampScore(value, max);
    const diameter = SCORE_RING_SIZE[size];
    const stroke = Math.max(5, Math.round(diameter * 0.07));
    const r = (diameter - stroke) / 2;
    const circumference = 2 * Math.PI * r;
    const resolved = tone === 'auto' ? autoTone(v, max) : tone;
    return (
      <Box
        as="div"
        ref={ref}
        role="meter"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={v}
        aria-label={label}
        data-tone={resolved}
        {...props}
        sx={[scoreRingStyle(diameter), props.sx]}
      >
        <svg viewBox={`0 0 ${diameter} ${diameter}`} aria-hidden>
          <circle
            data-role="score-track"
            cx={diameter / 2}
            cy={diameter / 2}
            r={r}
            fill="none"
            strokeWidth={stroke}
          />
          <circle
            data-role="score-arc"
            cx={diameter / 2}
            cy={diameter / 2}
            r={r}
            fill="none"
            stroke={toneColor(theme, resolved)}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - v / max)}
          />
        </svg>
        <span data-role="score-center" aria-hidden>
          <span data-role="score-value">{Math.round(v)}</span>
          {label && <span data-role="score-label">{label}</span>}
        </span>
      </Box>
    );
  },
);

ScoreRing.displayName = 'ScoreRing';

export { ScoreRing };

export type { ScoreRingProps, ScoreTone };
