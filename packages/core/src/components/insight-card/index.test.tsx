import { cleanup, render, screen, within } from '@testing-library/react';

import { InsightCard } from '.';

describe('InsightCard', () => {
  afterEach(cleanup);

  it('draws keywords with their details', () => {
    render(
      <InsightCard
        title="성향 키워드"
        content={{
          kind: 'keywords',
          items: [
            { label: '단단함', detail: '금 기운이 셈' },
            { label: '추진력' },
          ],
        }}
      />,
    );
    const card = screen.getByRole('region', { name: '성향 키워드' });
    expect(within(card).getAllByRole('listitem')).toHaveLength(2);
    expect(within(card).getByText('금 기운이 셈')).toBeInTheDocument();
  });

  it('puts the two sides of a comparison next to each other', () => {
    render(
      <InsightCard
        title="강점과 주의"
        content={{
          kind: 'compare',
          left: { label: '강점', points: ['결단'] },
          right: { label: '주의', points: ['고집'] },
        }}
      />,
    );
    expect(screen.getByRole('region', { name: '강점' })).toHaveTextContent(
      '결단',
    );
    expect(screen.getByRole('region', { name: '주의' })).toHaveAttribute(
      'data-side',
      'right',
    );
  });

  it('orders timeline items and marks their tone', () => {
    render(
      <InsightCard
        title="이번 달 좋은 날"
        content={{
          kind: 'timeline',
          items: [
            { when: '10월 22일', text: '제안에 응하기', tone: 'good' },
            { when: '10월 25일', text: '쉬어 가기' },
          ],
        }}
      />,
    );
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveAttribute('data-tone', 'good');
    expect(items[1]).toHaveAttribute('data-tone', 'neutral');
  });

  it('numbers checklist items', () => {
    render(
      <InsightCard
        title="오늘 해 볼 일"
        content={{ kind: 'checklist', items: ['자격증 알아보기', '일찍 자기'] }}
      />,
    );
    expect(screen.getAllByRole('listitem').map((li) => li.textContent)).toEqual(
      ['1자격증 알아보기', '2일찍 자기'],
    );
  });
});

describe('InsightCard eyebrow', () => {
  afterEach(cleanup);

  it('shows the eyebrow above the title', () => {
    render(
      <InsightCard
        eyebrow="性向 · 성향"
        title="성향 키워드"
        content={{ kind: 'checklist', items: ['하나', '둘'] }}
      />,
    );
    expect(screen.getByText('性向 · 성향')).toHaveAttribute(
      'data-role',
      'insight-eyebrow',
    );
  });
});
