/**
 * 오행(五行) 다섯 색. 각 행은 30(글자), 50(채움), 60(다크 채움), 90(옅은 면), 95(아주 옅은 면) 단계를 가진다.
 * 전통 오방색(청·적·황·백·흑)을 화면에서 서로 구분되도록 옮겼다. 금(金)의 백색은 흰 바탕에서 보이지 않아 은회색으로, 수(水)의 흑색은 먹과 섞이지 않도록 깊은 청색으로 둔다.
 */
export const wood = { 30: '#14532D', 50: '#2E9E5B', 60: '#4CB977', 90: '#CDEBD8', 95: '#E3F4EA' } as const;
export const fire = { 30: '#7F1D1D', 50: '#E5484D', 60: '#F06A6E', 90: '#F9D3D4', 95: '#FDE8E8' } as const;
export const earth = { 30: '#713F12', 50: '#C9902A', 60: '#DBA645', 90: '#F3E2BE', 95: '#FBF1DD' } as const;
export const metal = { 30: '#33363D', 50: '#8E929C', 60: '#A9ADB6', 90: '#DEE0E4', 95: '#EFF0F2' } as const;
export const water = { 30: '#172C66', 50: '#2F5BD3', 60: '#5079E3', 90: '#CCD8F6', 95: '#E4EBFB' } as const;
