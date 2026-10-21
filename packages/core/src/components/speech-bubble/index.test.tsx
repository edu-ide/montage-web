import { cleanup, render, screen } from '@testing-library/react';

import { SpeechBubble } from '.';

describe('SpeechBubble', () => {
  afterEach(cleanup);

  it('renders the line', () => {
    render(<SpeechBubble>어서 오세요</SpeechBubble>);
    expect(screen.getByText('어서 오세요')).toBeInTheDocument();
  });

  it('holds a whole passage left aligned', () => {
    render(
      <SpeechBubble tail="left" length="passage">
        <p>첫 문단</p>
        <p>둘째 문단</p>
      </SpeechBubble>,
    );
    const bubble = screen.getByText('첫 문단').parentElement!;
    expect(getComputedStyle(bubble).textAlign).toBe('left');
    expect(bubble.querySelectorAll('p')).toHaveLength(2);
  });
});
