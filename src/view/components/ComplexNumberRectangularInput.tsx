import { ComplexNumberUI } from "../../model/interfaces/ComplexNumberUI";
import NumberInput from "./NumberInput";

export default function ComplexNumberRectangularInput(
  props: ComplexNumberUI
) {
  return (
    <form>
      <NumberInput
        label="Real"
        inputID="realComplexPart"
        value={props.realValue}
        setValue={props.setRealValue}
      />
      <NumberInput
        label="Imaginary"
        inputID="imaginaryComplexPart"
        value={props.imaginaryValue}
        setValue={props.setImaginaryValue}
      />
    </form>
  );
}
