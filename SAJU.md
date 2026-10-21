# Saju Montage — 사주 디자인 시스템

[Montage](https://github.com/wanteddev/montage-web)(원티드 디자인 시스템, MIT)를 포크해 사주 서비스용으로 다시 만든 디자인 시스템이다. 이 포크의 작업 브랜치는 `saju` 이고, 원본의 부품·접근성·빌드 체계를 그대로 물려받는다.

## 원칙

1. **엔진의 숫자를 그대로 그린다.** 사주 부품은 값을 계산하지 않는다. 명식·오행·점수는 사주 엔진이 준 값을 받아 보여 주기만 한다.
2. **한지 위의 먹.** 바탕은 한지, 글자는 먹, 브랜드는 쪽빛, 강조는 단청 붉은빛이다. 차갑고 푸른 원본 무채색(coolNeutral)을 따뜻한 먹(ink)으로 바꿨다.
3. **오행은 늘 같은 색.** 목·화·토·금·수는 화면 어디서나 같은 다섯 색(`semantic.ohaeng.*`)으로만 표현한다.
4. **한 역할 한 글꼴.** UI 는 Pretendard(`--font-sans`), 캐릭터의 말은 어디서든 본문용 명조(`--font-voice`), 간지 한자·제목·점수 같은 사주 상징은 명조(`--font-serif`)다. 같은 화자가 두 글꼴로 말하지 않는다.
5. **원본과 합칠 수 있게.** 의미 토큰의 이름과 모양은 원본과 같고 값만 바꿨다. 새 토큰은 추가만 한다.

## 토큰

### 원색 (atomic)

| 팔레트 | 쓰임 | 대표 값 |
|:---|:---|:---|
| `ink` | 무채색 전체(글자·선·어두운 면). coolNeutral 과 같은 단계 키 | 10 `#1F1B16`, 50 `#847969`, 98 `#F5F1E8` |
| `hanji` | 바탕(98)과 올린 면(100), 트랙(95)·경계(90) | 98 `#F7F3EA`, 100 `#FFFDF8` |
| `indigo` | 브랜드(쪽빛) | 50 `#2B3A8C`, 60 `#4A5BB0` |
| `dancheong` | 강조·위험(단청 붉은빛) | 50 `#C2373D` |
| `wood` `fire` `earth` `metal` `water` | 오행. 30 글자, 50 채움, 60 다크 채움, 90 옅은 면, 95 아주 옅은 면 | 목 `#2E9E5B`, 화 `#E5484D`, 토 `#C9902A`, 금 `#8E929C`, 수 `#2F5BD3` |

금(金)의 전통색인 백색은 흰 바탕에서 보이지 않아 은회색으로, 수(水)의 흑색은 먹과 구분되도록 깊은 청색으로 옮겼다.

### 의미 (semantic)

| 토큰 | 라이트 | 다크 |
|:---|:---|:---|
| `background.neutral.primary` | 한지 98 | 먹 15 |
| `surface.neutral.primary`, `surface.elevated.primary` | 한지 100 | 먹 15 / 17 |
| `foreground.neutral.*`, `line.neutral.*` | 먹 | 먹 |
| `foreground.brand.*`, `surface.brand.*`, `line.brand.*` | 쪽빛 50 | 쪽빛 60 |
| `foreground.negative.*` 등 negative | 단청 | 단청 |
| **`ohaeng.{wood,fire,earth,metal,water}.{primary,strong,soft,subtle}`** (추가) | 30·50·90·95 단계 | 60·90·투명 면 |

CSS 변수 이름은 원본 규칙을 따른다. 예: `--semantic-ohaeng-wood-primary`, `--semantic-background-neutral-primary`.

### 글꼴

| 변수 | 값 | 쓰임 |
|:---|:---|:---|
| `--font-sans` | Pretendard 계열(원본과 같은 스택) | UI: 버튼·입력·라벨·사용자가 쓴 글 |
| `--font-voice` | 고운바탕 → Noto Serif KR → 나눔명조 → AppleMyungjo → 바탕 | 캐릭터의 말: 말풍선과 대화 답(16px, 행간 1.5~1.75, 굵기 400) |
| `--font-serif` | Noto Serif KR → 나눔명조 → AppleMyungjo → 바탕 | 사주 상징: 간지 한자, 카드 제목, 점수 숫자 |

글꼴 파일은 포함하지 않는다. 앱이 Pretendard, 고운바탕(Gowun Batang), Noto Serif KR 을 불러온다.

## 사주 부품

| 부품 | 하는 일 | 문서 |
|:---|:---|:---|
| `GanjiGlyph` | 천간·지지 한 글자를 오행 색 타일로 | `docs/data/components/saju/ganji-glyph` |
| `PillarChart` | 원국 네 기둥(천간·지지·십성·12운성) | `.../pillar-chart` |
| `OhaengBalance` | 오행 개수 막대, 0 은 '없음'으로 강조 | `.../ohaeng-balance` |
| `ScoreRing` | 점수 원(일진 종합·궁합) | `.../score-ring` |
| `FortuneFlow` | 날·달·해·대운 점수 흐름과 지금 위치 | `.../fortune-flow` |
| `CompatibilityMeter` | 두 사람의 일간과 궁합 점수 | `.../compatibility-meter` |
| `SpeechBubble` | 캐릭터의 말(`--font-voice`) | `.../speech-bubble` |

모든 부품은 원본 관례(`Box` + `sx`, `index/types/style` 파일, 단위 테스트)를 따른다. 그 밖의 버튼·입력·모달·탭 등은 원본 Montage 부품을 그대로 쓰며, 토큰을 통해 자동으로 사주 색을 입는다.

## 빌드와 배포

```bash
# Node 24, pnpm 12
pnpm install
pnpm exec lerna run build --scope @montage-ui/core --include-dependencies
pnpm exec vitest run packages/theme packages/core
```

패키지 이름은 원본과 같은 `@montage-ui/*` 로 두고 버전에 `-saju.N` 을 붙인다. npm 에 올리지 않고 `pnpm pack` 결과물(tarball)을 쓰는 앱에 넣어 `overrides` 로 연결한다. 원본 업데이트는 `upstream` 원격에서 받아 `saju` 브랜치에 합친다.
