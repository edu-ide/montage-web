import { cleanup, render, screen } from '@testing-library/react';

import { SealBadge } from '.';

describe('SealBadge', () => {
  afterEach(cleanup);

  it('renders its text and accepts an accessible name', () => {
    render(<SealBadge aria-label="다온 도장">다온</SealBadge>);
    expect(screen.getByLabelText('다온 도장')).toHaveTextContent('다온');
  });

  it('tilts by default and can stand straight', () => {
    const { rerender } = render(<SealBadge>四柱</SealBadge>);
    expect(getComputedStyle(screen.getByText('四柱')).transform).toBe(
      'rotate(-8deg)',
    );
    rerender(<SealBadge tilt={false}>四柱</SealBadge>);
    expect(getComputedStyle(screen.getByText('四柱')).transform).toBe('none');
  });
});
