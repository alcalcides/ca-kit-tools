import { Link } from "react-router-dom";
import SiteTitle from "../components/SiteTitle";

export default function HomePage() {
  return (
    <div id="HomePage" className="page container">
      <header>
        <SiteTitle />
        <p>Save time, keep smart learning.</p>
      </header>
      <ul>
        <li>
          <Link to="/complex-numbers-forms">Complex numbers forms</Link>
        </li>
      </ul>
    </div>
  );
}
