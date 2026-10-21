import type { WithSxProps } from '@montage-ui/engine';

export type InsightTone = 'good' | 'neutral' | 'caution';

/** 그림 한 장의 내용. 모델이 고르는 네 가지 모양이며 숫자 점수를 담는 칸은 없다. */
export type InsightContent =
  | { kind: 'keywords'; items: Array<{ label: string; detail?: string }> }
  | {
      kind: 'compare';
      left: { label: string; points: Array<string> };
      right: { label: string; points: Array<string> };
    }
  | {
      kind: 'timeline';
      items: Array<{ when: string; text: string; tone?: InsightTone }>;
    }
  | { kind: 'checklist'; items: Array<string> };

export type InsightCardProps = WithSxProps<{
  /** Small label above the title (e.g. 性向 · 성향). */
  eyebrow?: string;
  /** The card title. */
  title: string;
  /** What to draw. */
  content: InsightContent;
}>;
