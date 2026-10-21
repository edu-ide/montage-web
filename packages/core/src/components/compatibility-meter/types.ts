import type { WithSxProps } from '@montage-ui/engine';
import type { Ohaeng } from '../ganji-glyph/types';

export type CompatibilityPerson = {
  /** The person's name. */
  name: string;
  /** The day master (일간) character. */
  dayMaster: { hanja: string; reading: string; ohaeng: Ohaeng };
};

export type CompatibilityMeterProps = WithSxProps<{
  /** Exactly two people. */
  people: [CompatibilityPerson, CompatibilityPerson];
  /** The compatibility score (0..100). */
  score: number;
  /** The relation between the two day masters (e.g. 상생, 상극, 비화). */
  relation?: string;
}>;
