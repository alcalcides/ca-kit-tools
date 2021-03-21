import { NumberInputProps } from "../../model/interfaces/NumberInputProps";

export default function NumberInput(props:NumberInputProps) {
  return (
    <div className="col-auto">
      <label htmlFor={props.inputID} className="col-1">
        {props.label}
      </label>
      <input type="number" id={props.inputID} />
    </div>
  );
}
