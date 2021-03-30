import { useEffect, useState } from "react";
import { ComplexNumber } from "../../model/Math/ComplexNumber";
import ComplexNumberRectangularInput from "../components/ComplexNumberRectangularInput";
import PageTitle from "../components/PageTitle";
import SiteTitle from "../components/SiteTitle";
import { SeeRectangularFormOfComplexNumber } from "../components/SeeRectangularFormOfComplexNumber";
import { SeePolarFormOfComplexNumber } from "../components/SeePolarFormOfComplexNumber";

export default function ComplexNumbersForms() {
  const [realValueNum1, setRealValueNum1] = useState(0);
  const [imaginaryValueNum1, setImaginaryValueNum1] = useState(0);
  const [complexNumber1, setComplexNumber1] = useState<ComplexNumber>(
    new ComplexNumber(0, 0)
  );

  useEffect(() => {
    const temp = new ComplexNumber(realValueNum1, imaginaryValueNum1);
    setComplexNumber1(temp);
  }, [realValueNum1, imaginaryValueNum1]);

  return (
    <div id="ComplexNumber" className="page container">
      <header className="row">
        <SiteTitle />
        <PageTitle content="Complex Numbers Forms" />
      </header>
      <main className="row">
        <section id="RectangularForm">
          <ComplexNumberRectangularInput
            realValue={realValueNum1}
            setRealValue={setRealValueNum1}
            imaginaryValue={imaginaryValueNum1}
            setImaginaryValue={setImaginaryValueNum1}
          />
        </section>
        <section>
          <h2>Forms</h2>
          <SeeRectangularFormOfComplexNumber
            imaginaryValue={complexNumber1.imaginary}
            realValue={complexNumber1.real}
          />
          <SeePolarFormOfComplexNumber 
            module={complexNumber1.module}
            angle={complexNumber1.angle} 
          />
        </section>
      </main>
    </div>
  );
}
