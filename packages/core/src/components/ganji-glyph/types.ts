import type { WithSxProps } from '@montage-ui/engine';

/** 오행(五行). 목·화·토·금·수를 영어 키로 쓴다. */
export type Ohaeng = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export type GanjiGlyphProps = WithSxProps<{
  /** The stem or branch character, usually hanja (e.g. 庚). */
  hanja: string;
  /** The reading shown in the corner (e.g. 경). */
  reading?: string;
  /** The five-element phase that colors the glyph. */
  ohaeng: Ohaeng;
  /** The size of the glyph. */
  size?: 'small' | 'medium' | 'large';
  /** Soft tints the background; solid fills it with the phase color. */
  variant?: 'soft' | 'solid';
}>;
