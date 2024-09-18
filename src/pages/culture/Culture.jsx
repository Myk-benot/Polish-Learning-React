import { Link } from "react-router-dom";
import "./culture.css";

function CultureHomePage() {
  return (
    <div className="culture-container">
      <h1>Culture</h1>
      <p>Explore the rich history and culture of Poland.</p>
      <div className="links-container">
        <ul>
          <li>
            <Link to="/arts">Arts</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/landmarks">Landmarks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CultureHomePage;
