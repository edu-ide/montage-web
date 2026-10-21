import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { speechBubbleStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { SpeechBubbleProps } from './types';

/** 캐릭터가 하는 짧은 말. 명조로 적어 사주 화면의 목소리를 낸다. */
const SpeechBubble = forwardRef<
  HTMLParagraphElement,
  DefaultComponentPropsInternal<SpeechBubbleProps, 'p'>
>(({ tail = 'top', tone = 'paper', children, ...props }, ref) => (
  <Box
    as="p"
    ref={ref}
    {...props}
    sx={[speechBubbleStyle({ tail, tone }), props.sx]}
  >
    {children}
  </Box>
));

SpeechBubble.displayName = 'SpeechBubble';

export { SpeechBubble };

export type { SpeechBubbleProps };
