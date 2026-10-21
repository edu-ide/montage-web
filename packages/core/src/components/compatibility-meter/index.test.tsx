import { cleanup, render, screen } from '@testing-library/react';

import { CompatibilityMeter } from '.';

describe('CompatibilityMeter', () => {
  afterEach(cleanup);

  it('faces both day masters around the score', () => {
    render(
      <CompatibilityMeter
        people={[
          {
            name: '민지',
            dayMaster: { hanja: '甲', reading: '갑', ohaeng: 'wood' },
          },
          {
            name: '준호',
            dayMaster: { hanja: '丙', reading: '병', ohaeng: 'fire' },
          },
        ]}
        score={82}
        relation="상생"
      />,
    );
    expect(
      screen.getByRole('group', { name: '민지·준호 궁합 82점 (상생)' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: '갑(甲) · 목' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: '병(丙) · 화' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('meter', { name: '궁합' })).toHaveAttribute(
      'aria-valuenow',
      '82',
    );
  });
});
