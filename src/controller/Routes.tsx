import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../view/pages/HomePage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
