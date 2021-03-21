import NumberInput from "../components/NumberInput";
import PageTitle from "../components/PageTitle";
import SiteTitle from "../components/SiteTitle";

export default function ComplexNumbersForms() {
  return (
    <div id="ComplexNumber" className="page container">
      <header className="row">
        <SiteTitle />
        <PageTitle content="Complex Numbers Forms"/>
      </header>
      <main className="row">
        <section id="RectangularForm">
          <NumberInput label="Real" inputID="realComplexPart"/>
          <NumberInput label="Imaginary" inputID="imaginaryComplexPart"/>
        </section>
      </main>
    </div>
  );
}


