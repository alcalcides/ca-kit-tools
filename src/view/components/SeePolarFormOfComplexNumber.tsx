import { ComplexNumberLookAtAsPolarUI } from "../../model/interfaces/ComplexNumberLookAtUIAsPolar";
import { radianosToDegrees } from "../../model/lib/trigonometry"

export function SeePolarFormOfComplexNumber(
  props: ComplexNumberLookAtAsPolarUI
) {
  return (
    <p>
      Polar: {props.module} /_ {radianosToDegrees(props.angle)}°
    </p>
  );
}


