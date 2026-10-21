import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { GanjiGlyph } from '../ganji-glyph';
import { ScoreRing } from '../score-ring';

import { compatibilityMeterStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { CompatibilityMeterProps, CompatibilityPerson } from './types';

/** 두 사람의 일간과 궁합 점수를 마주 보게 놓는다. */
const CompatibilityMeter = forwardRef<
  HTMLDivElement,
  DefaultComponentPropsInternal<CompatibilityMeterProps, 'div'>
>(({ people, score, relation, ...props }, ref) => (
  <Box
    as="div"
    ref={ref}
    role="group"
    aria-label={`${people[0].name}·${people[1].name} 궁합 ${Math.round(score)}점${relation ? ` (${relation})` : ''}`}
    {...props}
    sx={[compatibilityMeterStyle, props.sx]}
  >
    {[people[0], 'center', people[1]].map((p, i) =>
      p === 'center' ? (
        <div key="center" data-role="compat-center">
          <ScoreRing value={score} size="small" label="궁합" />
          {relation && <span data-role="compat-relation">{relation}</span>}
        </div>
      ) : (
        <div key={i} data-role="compat-person">
          <GanjiGlyph
            hanja={(p as CompatibilityPerson).dayMaster.hanja}
            reading={(p as CompatibilityPerson).dayMaster.reading}
            ohaeng={(p as CompatibilityPerson).dayMaster.ohaeng}
            size="large"
          />
          <span data-role="compat-name">{(p as CompatibilityPerson).name}</span>
        </div>
      ),
    )}
  </Box>
));

CompatibilityMeter.displayName = 'CompatibilityMeter';

export { CompatibilityMeter };

export type { CompatibilityMeterProps, CompatibilityPerson };
