import { cleanup, render, screen } from '@testing-library/react';

import { autoTone, clampScore } from './helpers';

import { ScoreRing } from '.';

describe('ScoreRing', () => {
  afterEach(cleanup);

  it('exposes the score as a meter', () => {
    render(<ScoreRing value={45} label="종합" />);
    const meter = screen.getByRole('meter', { name: '종합' });
    expect(meter).toHaveAttribute('aria-valuenow', '45');
    expect(meter).toHaveAttribute('data-tone', 'cautionary');
    expect(screen.getByText('45')).toBeInTheDocument();
  });

  it('clamps out-of-range values', () => {
    render(<ScoreRing value={150} label="궁합" />);
    expect(screen.getByRole('meter')).toHaveAttribute('aria-valuenow', '100');
    expect(clampScore(-5, 100)).toBe(0);
    expect(clampScore(Number.NaN, 100)).toBe(0);
  });

  it('picks the tone from the score ratio', () => {
    expect(autoTone(65, 100)).toBe('positive');
    expect(autoTone(45, 100)).toBe('cautionary');
    expect(autoTone(44, 100)).toBe('negative');
    expect(autoTone(4, 5)).toBe('positive');
  });
});
