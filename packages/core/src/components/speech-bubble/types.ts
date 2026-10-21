import type { WithSxProps } from '@montage-ui/engine';
import type { ReactNode } from 'react';

export type SpeechBubbleProps = WithSxProps<{
  /** Where the tail points from. `left` sits beside the speaker. `none` hides it. */
  tail?: 'top' | 'bottom' | 'left' | 'none';
  /** `line` is one short centered line; `passage` holds a whole answer, left aligned. */
  length?: 'line' | 'passage';
  /** Paper is the default card; brand fills it with indigo. */
  tone?: 'paper' | 'brand';
  /** The spoken line. */
  children?: ReactNode;
}>;
