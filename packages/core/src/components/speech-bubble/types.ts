import type { WithSxProps } from '@montage-ui/engine';
import type { ReactNode } from 'react';

export type SpeechBubbleProps = WithSxProps<{
  /** Where the tail points from. `none` hides it. */
  tail?: 'top' | 'bottom' | 'none';
  /** Paper is the default card; brand fills it with indigo. */
  tone?: 'paper' | 'brand';
  /** The spoken line. */
  children?: ReactNode;
}>;
