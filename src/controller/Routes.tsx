import { BrowserRouter, Switch, Route } from "react-router-dom";
import ComplexNumbersForms from "../view/pages/ComplexNumbersForms";
import HomePage from "../view/pages/HomePage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/complex-numbers-forms" exact component={ComplexNumbersForms} />
      </Switch>
    </BrowserRouter>
  );
}
