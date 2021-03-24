export function calculatesBetterAngle(imaginary: number, real: number): number {
  let rowAngle = arttg(imaginary, real);
  if(real < 0 ) rowAngle += Math.PI;

  return rowAngle;
}

export function arttg(imaginary: number, real: number) {
  return Math.atan(imaginary / real);
}
