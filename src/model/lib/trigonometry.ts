export function calculatesBetterAngle(imaginary: number, real: number): number {
  let rowAngle = arttg(imaginary, real);
  rowAngle = reduceAngleToPositiveTan(rowAngle);

  return rowAngle;
}

export function arttg(imaginary: number, real: number) {
  return Math.atan(imaginary / real);
}

export function reduceAngleToPositiveTan(rowAngle: number) {
  while (rowAngle > Math.PI) {
    rowAngle = rowAngle - Math.PI;
  }
  while (rowAngle < 0) {
    rowAngle = rowAngle + Math.PI;
  }
  return rowAngle;
}

