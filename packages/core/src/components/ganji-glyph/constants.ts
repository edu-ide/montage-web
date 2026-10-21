import type { Ohaeng } from './types';

/** 오행 한글·한자 표기. 접근성 이름과 범례에 쓴다. */
export const OHAENG_LABEL: Record<Ohaeng, { ko: string; hanja: string }> = {
  wood: { ko: '목', hanja: '木' },
  fire: { ko: '화', hanja: '火' },
  earth: { ko: '토', hanja: '土' },
  metal: { ko: '금', hanja: '金' },
  water: { ko: '수', hanja: '水' },
};

export const OHAENG_ORDER: Array<Ohaeng> = [
  'wood',
  'fire',
  'earth',
  'metal',
  'water',
];
