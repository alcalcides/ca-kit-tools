import { useEffect, useState } from "react";
import { ComplexNumberLookAtUI } from "../../model/interfaces/ComplexNumberLookAtUIAsRectangular";

export function SeeRectangularFormOfComplexNumber(
  props: ComplexNumberLookAtUI
) {
  const [isImaginaryNegative, setIsImaginaryNegative] = useState(false);

  useEffect(() => {
    if (props.imaginaryValue < 0) setIsImaginaryNegative(true);
    else setIsImaginaryNegative(false);
  }, [props]);

  return (
    <p>
      Rectangular Format: {props.realValue}
      {!isImaginaryNegative && "+"}
      {props.imaginaryValue}j
    </p>
  );
}
