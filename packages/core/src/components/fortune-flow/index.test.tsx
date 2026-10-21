import { cleanup, render, screen } from '@testing-library/react';

import { toCoordinates } from './helpers';

import { FortuneFlow } from '.';

const points = Array.from({ length: 31 }, (_, i) => ({
  label: `${i + 1}일`,
  value: 40 + (i % 5) * 10,
}));

describe('FortuneFlow', () => {
  afterEach(cleanup);

  it('labels the first, highlighted and last points by default', () => {
    render(
      <FortuneFlow
        points={points}
        highlightIndex={20}
        aria-label="10월 흐름"
      />,
    );
    expect(screen.getByRole('img', { name: '10월 흐름' })).toBeInTheDocument();
    const labels = Array.from(
      document.querySelectorAll('[data-role="flow-labels"] span'),
    ).map((s) => s.textContent);
    expect(labels).toEqual(['1일', '21일', '31일']);
    expect(document.querySelector('[data-role="flow-dot"]')).not.toBeNull();
  });

  it('keeps every value in the accessible title', () => {
    render(<FortuneFlow points={points.slice(0, 3)} aria-label="흐름" />);
    expect(document.querySelector('title')?.textContent).toBe(
      '1일 40, 2일 50, 3일 60',
    );
    expect(document.querySelector('[data-role="flow-dot"]')).toBeNull();
  });

  it('maps values into the drawing box and clamps outliers', () => {
    const [low, high, single] = [
      toCoordinates([0, 100], 100, 100, 0, 0, 100),
      toCoordinates([200], 100, 100, 0, 0, 100),
      toCoordinates([50], 100, 100, 0, 0, 100),
    ];
    expect(low).toEqual([
      { x: 0, y: 100 },
      { x: 100, y: 0 },
    ]);
    expect(high[0]?.y).toBe(0);
    expect(single[0]?.x).toBe(50);
  });
});
