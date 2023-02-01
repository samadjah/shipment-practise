import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? classes.active : undefined}end>Basic Table</NavLink>
          </li>
          <li>
            <NavLink to="/ajax" className={({isActive})=> isActive ? classes.active : undefined}>Table Ajax</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
