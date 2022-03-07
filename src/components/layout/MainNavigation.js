import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React MeetUps</div>
      <ul>
        <li>
          <Link to="/">All MeetUps</Link>
        </li>
        <li>
            <Link to="/new">Add new Meetups</Link>
        </li>
        <li>
            <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
