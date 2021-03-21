import { Title } from "../../model/interfaces/Title";

export default function PageTitle(props:Title) {
  return <h2>{props.content}</h2>;
}
