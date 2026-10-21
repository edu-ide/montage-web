/** 점들을 0..width, 0..height 좌표로 옮긴다. 값이 하나면 가운데 한 점이 된다. */
export const toCoordinates = (
  values: Array<number>,
  width: number,
  height: number,
  pad: number,
  min: number,
  max: number,
) => {
  const span = max - min || 1;
  const step = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;
  return values.map((v, i) => {
    const clamped = Math.min(Math.max(v, min), max);
    return {
      x: values.length > 1 ? pad + i * step : width / 2,
      y: height - pad - ((clamped - min) / span) * (height - pad * 2),
    };
  });
};
