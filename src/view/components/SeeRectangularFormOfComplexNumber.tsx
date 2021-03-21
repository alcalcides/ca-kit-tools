import { useEffect, useState } from "react";
import { ComplexNumber } from "../../model/Math/ComplexNumber";

export function SeeRectangularFormOfComplexNumber(
  complexNumber: ComplexNumber
) {
  const [isImaginaryNegative, setIsImaginaryNegative] = useState(false);

  useEffect(() => {
    if (complexNumber.imaginary < 0) setIsImaginaryNegative(true);
    else setIsImaginaryNegative(false);
  }, [complexNumber]);

  return (
    <p>
      Rectangular Format: {complexNumber.real}
      {!isImaginaryNegative && "+"}
      {complexNumber.imaginary}j
    </p>
  );
}
