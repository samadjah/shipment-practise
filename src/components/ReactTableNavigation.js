import { NavLink } from "react-router-dom";


import classes from './ReactTableNavigation.module.css';

function ReactTableNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({ isActive }) => isActive ? classes.active : undefined}
 to="/reacttable" end>All Customer</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default ReactTableNavigation;