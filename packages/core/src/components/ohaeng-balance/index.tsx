import { forwardRef } from 'react';
import { Box, useTheme } from '@montage-ui/engine';

import { OHAENG_LABEL, OHAENG_ORDER } from '../ganji-glyph/constants';

import { ohaengBalanceStyle } from './style';

import type { DefaultComponentPropsInternal } from '@montage-ui/engine';
import type { OhaengBalanceProps } from './types';

/** 목·화·토·금·수의 개수를 같은 축의 막대로 비교한다. 0 은 emptyLabel 로 드러낸다. */
const OhaengBalance = forwardRef<
  HTMLUListElement,
  DefaultComponentPropsInternal<OhaengBalanceProps, 'ul'>
>(
  (
    {
      values,
      emptyLabel = '없음',
      formatValue = String,
      'aria-label': ariaLabel = '오행 균형',
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const max = Math.max(1, ...OHAENG_ORDER.map((o) => values[o] ?? 0));
    return (
      <Box
        as="ul"
        ref={ref}
        aria-label={ariaLabel}
        {...props}
        sx={[ohaengBalanceStyle, props.sx]}
      >
        {OHAENG_ORDER.map((o) => {
          const value = values[o] ?? 0;
          const tone = theme.semantic.ohaeng[o];
          return (
            <li
              key={o}
              data-role="ohaeng-row"
              aria-label={`${OHAENG_LABEL[o].ko} ${value === 0 ? emptyLabel : formatValue(value)}`}
            >
              <span
                data-role="ohaeng-name"
                style={{ color: tone.strong }}
                aria-hidden
              >
                {OHAENG_LABEL[o].hanja}
                <small>{OHAENG_LABEL[o].ko}</small>
              </span>
              <span data-role="ohaeng-track" aria-hidden>
                <span
                  data-role="ohaeng-bar"
                  style={{
                    width: `${(value / max) * 100}%`,
                    backgroundColor: tone.primary,
                  }}
                />
              </span>
              <span
                data-role="ohaeng-value"
                data-empty={value === 0 ? 'true' : 'false'}
                aria-hidden
              >
                {value === 0 ? emptyLabel : formatValue(value)}
              </span>
            </li>
          );
        })}
      </Box>
    );
  },
);

OhaengBalance.displayName = 'OhaengBalance';

export { OhaengBalance };

export type { OhaengBalanceProps };
