/**
 * 사주 테마(edu-ide/montage-web saju 브랜치): 의미 토큰의 이름과 모양은 원본 Montage 와 같고,
 * 값만 먹(ink)·한지(hanji)·쪽빛(indigo)·단청(dancheong) 원색으로 다시 연결했다. ohaeng 그룹은 추가분이다.
 */
import atomic from '../atomic';
import opacity from '../opacity';
import { addHexOpacity } from '../../utils';

export const light = {
  static: {
    white: atomic.common[100],
    black: atomic.common[0],
  },
  foreground: {
    neutral: {
      primary: atomic.ink[10],
      strong: atomic.common[0],
      secondary: addHexOpacity(atomic.ink[22], opacity[88]),
      tertiary: addHexOpacity(atomic.ink[25], opacity[61]),
      quaternary: addHexOpacity(atomic.ink[25], opacity[28]),
      inverse: atomic.ink[99],
    },
    brand: {
      primary: atomic.indigo[50],
      inverse: atomic.indigo[60],
    },
    positive: {
      primary: atomic.green[50],
    },
    cautionary: {
      primary: atomic.orange[50],
    },
    negative: {
      primary: atomic.dancheong[50],
      strong: atomic.dancheong[40],
    },
    disable: {
      primary: addHexOpacity(atomic.ink[25], opacity[16]),
    },
    inactive: {
      primary: atomic.ink[70],
    },
    accent: {
      lime: atomic.lime[37],
      cyan: atomic.cyan[40],
      lightBlue: atomic.lightBlue[40],
      violet: atomic.violet[45],
      purple: atomic.purple[40],
      pink: atomic.pink[46],
    },
  },
  background: {
    neutral: {
      primary: atomic.hanji[98],
      secondary: atomic.ink[99],
    },
  },
  surface: {
    neutral: {
      primary: atomic.hanji[100],
      secondary: addHexOpacity(atomic.ink[50], opacity[8]),
      tertiary: addHexOpacity(atomic.ink[50], opacity[5]),
      strong: addHexOpacity(atomic.ink[50], opacity[16]),
      inverse: atomic.ink[15],
    },
    elevated: {
      primary: atomic.hanji[100],
      secondary: atomic.ink[99],
    },
    brand: {
      primary: atomic.indigo[50],
      strong: atomic.indigo[45],
      heavy: atomic.indigo[40],
      subtle: addHexOpacity(atomic.indigo[50], opacity[5]),
    },
    positive: {
      primary: addHexOpacity(atomic.green[50], opacity[8]),
    },
    cautionary: {
      primary: addHexOpacity(atomic.orange[50], opacity[8]),
    },
    negative: {
      primary: addHexOpacity(atomic.dancheong[50], opacity[8]),
      strong: addHexOpacity(atomic.dancheong[50], opacity[12]),
    },
    disable: {
      primary: atomic.ink[98],
    },
    accent: {
      lime: addHexOpacity(atomic.lime[50], opacity[8]),
      limeOpaque: atomic.lime[50],
      cyan: addHexOpacity(atomic.cyan[50], opacity[8]),
      cyanOpaque: atomic.cyan[50],
      lightBlue: addHexOpacity(atomic.lightBlue[50], opacity[8]),
      lightBlueOpaque: atomic.lightBlue[50],
      violet: addHexOpacity(atomic.violet[50], opacity[8]),
      violetOpaque: atomic.violet[50],
      purple: addHexOpacity(atomic.purple[50], opacity[8]),
      purpleOpaque: atomic.purple[50],
      pink: addHexOpacity(atomic.pink[50], opacity[8]),
      pinkOpaque: atomic.pink[50],
    },
  },
  line: {
    neutral: {
      primary: addHexOpacity(atomic.ink[50], opacity[22]),
      primaryOpaque: atomic.ink[96],
      secondary: addHexOpacity(atomic.ink[50], opacity[16]),
      secondaryOpaque: atomic.ink[97],
      tertiary: addHexOpacity(atomic.ink[50], opacity[8]),
      tertiaryOpaque: atomic.ink[98],
    },
    brand: {
      primary: addHexOpacity(atomic.indigo[50], opacity[28]),
      strong: addHexOpacity(atomic.indigo[50], opacity[43]),
      focus: addHexOpacity(atomic.indigo[50], opacity[12]),
    },
    cautionary: {
      primary: addHexOpacity(atomic.orange[50], opacity[43]),
    },
    positive: {
      primary: addHexOpacity(atomic.green[50], opacity[43]),
    },
    negative: {
      primary: addHexOpacity(atomic.dancheong[50], opacity[43]),
      strong: addHexOpacity(atomic.dancheong[50], opacity[52]),
      focus: addHexOpacity(atomic.dancheong[50], opacity[12]),
    },
    accent: {
      lime: addHexOpacity(atomic.lime[37], opacity[43]),
      cyan: addHexOpacity(atomic.cyan[40], opacity[43]),
      lightBlue: addHexOpacity(atomic.lightBlue[40], opacity[43]),
      violet: addHexOpacity(atomic.violet[45], opacity[43]),
      purple: addHexOpacity(atomic.purple[40], opacity[43]),
      pink: addHexOpacity(atomic.pink[46], opacity[43]),
    },
  },
  effect: {
    dimmer: {
      primary: addHexOpacity(atomic.ink[10], opacity[52]),
    },
    transparent: {
      primary: addHexOpacity(atomic.common[100], opacity[8]),
      secondary: addHexOpacity(atomic.common[100], opacity[28]),
    },
  },
  ohaeng: {
    wood: {
      primary: atomic.wood[50],
      strong: atomic.wood[30],
      soft: atomic.wood[90],
      subtle: atomic.wood[95],
    },
    fire: {
      primary: atomic.fire[50],
      strong: atomic.fire[30],
      soft: atomic.fire[90],
      subtle: atomic.fire[95],
    },
    earth: {
      primary: atomic.earth[50],
      strong: atomic.earth[30],
      soft: atomic.earth[90],
      subtle: atomic.earth[95],
    },
    metal: {
      primary: atomic.metal[50],
      strong: atomic.metal[30],
      soft: atomic.metal[90],
      subtle: atomic.metal[95],
    },
    water: {
      primary: atomic.water[50],
      strong: atomic.water[30],
      soft: atomic.water[90],
      subtle: atomic.water[95],
    },
  },
  elevation: {
    shadow: {
      normal: {
        xsmall: `0px 1px 2px -1px ${addHexOpacity(atomic.ink[10], 0.1)}`,
        small: `0px 2px 4px -2px ${addHexOpacity(atomic.ink[10], 0.06)}, 0px 4px 6px -1px ${addHexOpacity(atomic.ink[10], 0.06)}`,
        medium: `0px 4px 6px -2px ${addHexOpacity(atomic.ink[10], 0.07)}, 0px 10px 15px -3px ${addHexOpacity(atomic.ink[10], 0.07)}`,
        large: `0px 6px 10px -4px ${addHexOpacity(atomic.ink[10], 0.08)}, 0px 16px 24px -6px ${addHexOpacity(atomic.ink[10], 0.08)}`,
        xlarge: `0px 10px 15px -5px ${addHexOpacity(atomic.ink[10], 0.1)}, 0px 24px 38px -10px ${addHexOpacity(atomic.ink[10], 0.12)}`,
      },
      drop: {
        xsmall: `drop-shadow(0px 1px 0.5px ${addHexOpacity(atomic.ink[10], 0.05)})`,
        small: `drop-shadow(0px 2px 1px ${addHexOpacity(atomic.ink[10], 0.03)}) drop-shadow(0px 4px 2.5px ${addHexOpacity(atomic.ink[10], 0.03)})`,
        medium: `drop-shadow(0px 4px 2px ${addHexOpacity(atomic.ink[10], 0.035)}) drop-shadow(0px 10px 6px ${addHexOpacity(atomic.ink[10], 0.035)})`,
        large: `drop-shadow(0px 6px 3px ${addHexOpacity(atomic.ink[10], 0.04)}) drop-shadow(0px 16px 9px ${addHexOpacity(atomic.ink[10], 0.03)})`,
        xlarge: `drop-shadow(0px 10px 5px ${addHexOpacity(atomic.ink[10], 0.05)}) drop-shadow(0px 24px 14px ${addHexOpacity(atomic.ink[10], 0.06)})`,
      },
      spread: {
        small: `0px 0px 60px 0px ${addHexOpacity(atomic.ink[10], 0.1)}`,
        medium: `0px 15px 75px 0px ${addHexOpacity(atomic.ink[10], 0.16)}`,
      },
    },
  },
};

export const dark = {
  static: {
    white: atomic.common[100],
    black: atomic.common[0],
  },
  foreground: {
    neutral: {
      primary: atomic.ink[99],
      strong: atomic.common[100],
      secondary: addHexOpacity(atomic.ink[90], opacity[88]),
      tertiary: addHexOpacity(atomic.ink[80], opacity[61]),
      quaternary: addHexOpacity(atomic.ink[80], opacity[28]),
      inverse: atomic.ink[10],
    },
    brand: {
      primary: atomic.indigo[60],
      inverse: atomic.indigo[50],
    },
    positive: {
      primary: atomic.green[60],
    },
    cautionary: {
      primary: atomic.orange[60],
    },
    negative: {
      primary: atomic.dancheong[60],
      strong: atomic.dancheong[60],
    },
    disable: {
      primary: addHexOpacity(atomic.ink[70], opacity[16]),
    },
    inactive: {
      primary: atomic.ink[40],
    },
    accent: {
      lime: atomic.lime[50],
      cyan: atomic.cyan[50],
      lightBlue: atomic.lightBlue[50],
      violet: atomic.violet[70],
      purple: atomic.purple[60],
      pink: atomic.pink[60],
    },
  },
  background: {
    neutral: {
      primary: atomic.ink[15],
      secondary: atomic.ink[5],
    },
  },
  surface: {
    neutral: {
      primary: atomic.ink[15],
      secondary: addHexOpacity(atomic.ink[50], opacity[22]),
      tertiary: addHexOpacity(atomic.ink[50], opacity[12]),
      strong: addHexOpacity(atomic.ink[50], opacity[28]),
      inverse: atomic.common[100],
    },
    elevated: {
      primary: atomic.ink[17],
      secondary: atomic.ink[7],
    },
    brand: {
      primary: atomic.indigo[60],
      strong: atomic.indigo[55],
      heavy: atomic.indigo[50],
      subtle: addHexOpacity(atomic.indigo[60], opacity[5]),
    },
    positive: {
      primary: addHexOpacity(atomic.green[60], opacity[8]),
    },
    cautionary: {
      primary: addHexOpacity(atomic.orange[60], opacity[8]),
    },
    negative: {
      primary: addHexOpacity(atomic.dancheong[60], opacity[8]),
      strong: addHexOpacity(atomic.dancheong[60], opacity[22]),
    },
    disable: {
      primary: atomic.ink[22],
    },
    accent: {
      lime: addHexOpacity(atomic.lime[60], opacity[8]),
      limeOpaque: atomic.lime[60],
      cyan: addHexOpacity(atomic.cyan[60], opacity[8]),
      cyanOpaque: atomic.cyan[60],
      lightBlue: addHexOpacity(atomic.lightBlue[60], opacity[8]),
      lightBlueOpaque: atomic.lightBlue[60],
      violet: addHexOpacity(atomic.violet[60], opacity[8]),
      violetOpaque: atomic.violet[60],
      purple: addHexOpacity(atomic.purple[60], opacity[8]),
      purpleOpaque: atomic.purple[60],
      pink: addHexOpacity(atomic.pink[60], opacity[8]),
      pinkOpaque: atomic.pink[60],
    },
  },
  line: {
    neutral: {
      primary: addHexOpacity(atomic.ink[50], 0.32),
      primaryOpaque: atomic.ink[25],
      secondary: addHexOpacity(atomic.ink[50], opacity[28]),
      secondaryOpaque: atomic.ink[23],
      tertiary: addHexOpacity(atomic.ink[50], opacity[22]),
      tertiaryOpaque: atomic.ink[22],
    },
    brand: {
      primary: addHexOpacity(atomic.indigo[60], opacity[28]),
      strong: addHexOpacity(atomic.indigo[60], opacity[43]),
      focus: addHexOpacity(atomic.indigo[60], opacity[12]),
    },
    positive: {
      primary: addHexOpacity(atomic.green[60], opacity[43]),
    },
    cautionary: {
      primary: addHexOpacity(atomic.orange[60], opacity[43]),
    },
    negative: {
      primary: addHexOpacity(atomic.dancheong[60], opacity[43]),
      strong: addHexOpacity(atomic.dancheong[60], opacity[52]),
      focus: addHexOpacity(atomic.dancheong[60], opacity[12]),
    },
    accent: {
      lime: addHexOpacity(atomic.lime[50], opacity[43]),
      cyan: addHexOpacity(atomic.cyan[50], opacity[43]),
      lightBlue: addHexOpacity(atomic.lightBlue[50], opacity[43]),
      violet: addHexOpacity(atomic.violet[70], opacity[43]),
      purple: addHexOpacity(atomic.purple[60], opacity[43]),
      pink: addHexOpacity(atomic.pink[60], opacity[43]),
    },
  },
  effect: {
    dimmer: {
      primary: addHexOpacity(atomic.ink[10], opacity[74]),
    },
    transparent: {
      primary: addHexOpacity(atomic.ink[17], opacity[61]),
      secondary: addHexOpacity(atomic.ink[17], opacity[61]),
    },
  },
  ohaeng: {
    wood: {
      primary: atomic.wood[60],
      strong: atomic.wood[90],
      soft: addHexOpacity(atomic.wood[50], opacity[22]),
      subtle: addHexOpacity(atomic.wood[50], opacity[12]),
    },
    fire: {
      primary: atomic.fire[60],
      strong: atomic.fire[90],
      soft: addHexOpacity(atomic.fire[50], opacity[22]),
      subtle: addHexOpacity(atomic.fire[50], opacity[12]),
    },
    earth: {
      primary: atomic.earth[60],
      strong: atomic.earth[90],
      soft: addHexOpacity(atomic.earth[50], opacity[22]),
      subtle: addHexOpacity(atomic.earth[50], opacity[12]),
    },
    metal: {
      primary: atomic.metal[60],
      strong: atomic.metal[90],
      soft: addHexOpacity(atomic.metal[50], opacity[22]),
      subtle: addHexOpacity(atomic.metal[50], opacity[12]),
    },
    water: {
      primary: atomic.water[60],
      strong: atomic.water[90],
      soft: addHexOpacity(atomic.water[50], opacity[22]),
      subtle: addHexOpacity(atomic.water[50], opacity[12]),
    },
  },
  elevation: {
    shadow: {
      normal: {
        xsmall: `0px 1px 2px -1px ${addHexOpacity(atomic.ink[10], 0.1)}`,
        small: `0px 2px 4px -2px ${addHexOpacity(atomic.ink[10], 0.06)}, 0px 4px 6px -1px ${addHexOpacity(atomic.ink[10], 0.06)}`,
        medium: `0px 4px 6px -2px ${addHexOpacity(atomic.ink[10], 0.07)}, 0px 10px 15px -3px ${addHexOpacity(atomic.ink[10], 0.07)}`,
        large: `0px 6px 10px -4px ${addHexOpacity(atomic.ink[10], 0.08)}, 0px 16px 24px -6px ${addHexOpacity(atomic.ink[10], 0.08)}`,
        xlarge: `0px 10px 15px -5px ${addHexOpacity(atomic.ink[10], 0.1)}, 0px 24px 38px -10px ${addHexOpacity(atomic.ink[10], 0.12)}`,
      },
      drop: {
        xsmall: `drop-shadow(0px 1px 0.5px ${addHexOpacity(atomic.ink[10], 0.05)})`,
        small: `drop-shadow(0px 2px 1px ${addHexOpacity(atomic.ink[10], 0.03)}) drop-shadow(0px 4px 2.5px ${addHexOpacity(atomic.ink[10], 0.03)})`,
        medium: `drop-shadow(0px 4px 2px ${addHexOpacity(atomic.ink[10], 0.035)}) drop-shadow(0px 10px 6px ${addHexOpacity(atomic.ink[10], 0.035)})`,
        large: `drop-shadow(0px 6px 3px ${addHexOpacity(atomic.ink[10], 0.04)}) drop-shadow(0px 16px 9px ${addHexOpacity(atomic.ink[10], 0.03)})`,
        xlarge: `drop-shadow(0px 10px 5px ${addHexOpacity(atomic.ink[10], 0.05)}) drop-shadow(0px 24px 14px ${addHexOpacity(atomic.ink[10], 0.06)})`,
      },
      spread: {
        small: `0px 0px 60px 0px ${addHexOpacity(atomic.ink[10], 0.1)}`,
        medium: `0px 15px 75px 0px ${addHexOpacity(atomic.ink[10], 0.16)}`,
      },
    },
  },
};
