import type { WithSxProps } from '@montage-ui/engine';
import type { ReactNode } from 'react';

export type SealBadgeProps = WithSxProps<{
  /** The seal text. One to four characters read best (e.g. 다온, 四柱). */
  children: ReactNode;
  /** Round like a stamp pad seal, or square like a 낙관. */
  shape?: 'round' | 'square';
  /** The diameter. */
  size?: 'small' | 'medium' | 'large';
  /** Solid fills with dancheong red; outline draws only the ring. */
  variant?: 'solid' | 'outline';
  /** Tilts the seal a little, as if stamped by hand. */
  tilt?: boolean;
}>;
