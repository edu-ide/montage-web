import { forwardRef } from 'react';
import { Box } from '@montage-ui/engine';

import { sealBadgeStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { SealBadgeProps } from './types';

/** 단청색 도장. 브랜드 표시나 한 화면의 대표 행동 옆에 하나만 둔다. */
const SealBadge = forwardRef<
  HTMLSpanElement,
  DefaultComponentPropsInternal<SealBadgeProps, 'span'>
>(
  (
    {
      children,
      shape = 'round',
      size = 'medium',
      variant = 'solid',
      tilt = true,
      ...props
    },
    ref,
  ) => (
    <Box
      as="span"
      ref={ref}
      {...props}
      sx={[sealBadgeStyle({ shape, size, variant, tilt }), props.sx]}
    >
      {children}
    </Box>
  ),
);

SealBadge.displayName = 'SealBadge';

export { SealBadge };

export type { SealBadgeProps };
