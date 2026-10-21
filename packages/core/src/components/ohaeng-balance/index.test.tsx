import { cleanup, render, screen } from '@testing-library/react';

import { OhaengBalance } from '.';

describe('OhaengBalance', () => {
  afterEach(cleanup);

  it('lists all five phases in 목화토금수 order and calls out an empty one', () => {
    render(
      <OhaengBalance
        values={{ wood: 0, fire: 2, earth: 2, metal: 3, water: 1 }}
      />,
    );
    const rows = screen
      .getAllByRole('listitem')
      .map((li) => li.getAttribute('aria-label'));
    expect(rows).toEqual(['목 없음', '화 2', '토 2', '금 3', '수 1']);
  });

  it('scales bars against the largest value and treats missing phases as 0', () => {
    const { container } = render(
      <OhaengBalance values={{ metal: 4, water: 2 }} emptyLabel="0" />,
    );
    const widths = Array.from(
      container.querySelectorAll<HTMLElement>('[data-role="ohaeng-bar"]'),
    ).map((el) => el.style.width);
    expect(widths).toEqual(['0%', '0%', '0%', '100%', '50%']);
  });
});
