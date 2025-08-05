import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
        </li>
        <li>
          <Link to="/new-mailbox">New Mailbox</Link>
        </li>
        <li>
          <Link to="/new-letter">New Letter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
