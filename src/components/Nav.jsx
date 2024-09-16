import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Vocab-Home">Vocabulary </Link>
        </li>
        <li>
          <Link to="/Grammar-Home">Grammar </Link>
        </li>
        <li>
          <Link to="/#">Culture </Link>
        </li>
        <li>
          <Link to="/#">Quizzes </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
