import { cleanup, render, screen } from '@testing-library/react';

import { GanjiGlyph } from '.';

describe('GanjiGlyph', () => {
  afterEach(cleanup);

  it('names the character with its reading and phase', () => {
    render(<GanjiGlyph hanja="庚" reading="경" ohaeng="metal" />);
    expect(
      screen.getByRole('img', { name: '경(庚) · 금' }),
    ).toBeInTheDocument();
  });

  it('shows the reading in the corner only when given', () => {
    const { rerender } = render(
      <GanjiGlyph hanja="午" reading="오" ohaeng="fire" />,
    );
    expect(screen.getByText('오')).toBeInTheDocument();
    rerender(<GanjiGlyph hanja="午" ohaeng="fire" />);
    expect(screen.queryByText('오')).not.toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: '午(午) · 화' }),
    ).toBeInTheDocument();
  });
});
