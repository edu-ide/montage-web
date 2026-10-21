import { cleanup, render, screen } from '@testing-library/react';

import { SpeechBubble } from '.';

describe('SpeechBubble', () => {
  afterEach(cleanup);

  it('renders the line as a paragraph', () => {
    render(<SpeechBubble>어서 오세요</SpeechBubble>);
    expect(screen.getByText('어서 오세요').tagName).toBe('P');
  });
});
