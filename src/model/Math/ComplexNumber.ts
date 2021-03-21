import { calculatesBetterAngle } from "../lib/trigonometry";

export class ComplexNumber {
  real: number;
  imaginary: number;
  module: number;
  angle: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
    this.module = Math.sqrt(real**2 + imaginary**2);
    this.angle = calculatesBetterAngle(imaginary, real);
  }

}
