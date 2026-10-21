import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { OHAENG_LABEL, OHAENG_ORDER } from './constants';
import { ganjiGlyphStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { GanjiGlyphProps, Ohaeng } from './types';

/** 천간·지지 한 글자를 오행 색으로 보여 준다. */
const GanjiGlyph = forwardRef<
  HTMLSpanElement,
  DefaultComponentPropsInternal<GanjiGlyphProps, 'span'>
>(
  (
    { hanja, reading, ohaeng, size = 'medium', variant = 'soft', ...props },
    ref,
  ) => (
    <Box
      as="span"
      ref={ref}
      role="img"
      aria-label={`${reading ?? hanja}(${hanja}) · ${OHAENG_LABEL[ohaeng].ko}`}
      {...props}
      sx={[ganjiGlyphStyle({ hanja, ohaeng, size, variant }), props.sx]}
    >
      <span aria-hidden>{hanja}</span>
      {reading && (
        <span aria-hidden data-role="ganji-reading">
          {reading}
        </span>
      )}
    </Box>
  ),
);

GanjiGlyph.displayName = 'GanjiGlyph';

export { GanjiGlyph, OHAENG_LABEL, OHAENG_ORDER };

export type { GanjiGlyphProps, Ohaeng };
