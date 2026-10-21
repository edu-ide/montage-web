import { cleanup, render, screen } from '@testing-library/react';

import { PillarChart } from '.';

import type { Pillar } from '.';

const pillars: Array<Pillar> = [
  {
    key: 'hour',
    label: '시주',
    stem: { hanja: '癸', reading: '계', ohaeng: 'water', tenGod: '상관' },
    branch: { hanja: '未', reading: '미', ohaeng: 'earth', tenGod: '정인' },
    caption: '관대',
  },
  {
    key: 'day',
    label: '일주',
    stem: { hanja: '庚', reading: '경', ohaeng: 'metal' },
    branch: { hanja: '辰', reading: '진', ohaeng: 'earth' },
    highlighted: true,
  },
];

describe('PillarChart', () => {
  afterEach(cleanup);

  it('renders one column per pillar with stem above branch', () => {
    render(<PillarChart pillars={pillars} />);
    expect(
      screen.getByRole('group', { name: '사주 원국' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('시주 계미')).toBeInTheDocument();
    const glyphs = screen
      .getAllByRole('img')
      .map((el) => el.getAttribute('aria-label'));
    expect(glyphs).toEqual([
      '계(癸) · 수',
      '미(未) · 토',
      '경(庚) · 금',
      '진(辰) · 토',
    ]);
  });

  it('marks the highlighted pillar and shows ten gods and captions', () => {
    render(<PillarChart pillars={pillars} />);
    expect(screen.getByLabelText('일주 경진')).toHaveAttribute(
      'data-highlighted',
      'true',
    );
    expect(screen.getByLabelText('시주 계미')).toHaveAttribute(
      'data-highlighted',
      'false',
    );
    expect(screen.getByText('상관')).toBeInTheDocument();
    expect(screen.getByText('관대')).toBeInTheDocument();
  });
});
