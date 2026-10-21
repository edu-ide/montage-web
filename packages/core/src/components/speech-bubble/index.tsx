import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { speechBubbleStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { SpeechBubbleProps } from './types';

/** 캐릭터가 하는 짧은 말. 대화 답과 같은 --font-voice 로 적어 한 목소리를 낸다. */
const SpeechBubble = forwardRef<
  HTMLDivElement,
  DefaultComponentPropsInternal<SpeechBubbleProps, 'div'>
>(
  (
    { tail = 'top', tone = 'paper', length = 'line', children, ...props },
    ref,
  ) => (
    <Box
      as="div"
      ref={ref}
      {...props}
      sx={[speechBubbleStyle({ tail, tone, length }), props.sx]}
    >
      {children}
    </Box>
  ),
);

SpeechBubble.displayName = 'SpeechBubble';

export { SpeechBubble };

export type { SpeechBubbleProps };
