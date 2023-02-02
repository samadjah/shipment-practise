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
            <NavLink to="/axios" className={({isActive})=> isActive ? classes.active : undefined}>Table Axios</NavLink>
          </li>
          <li>
            <NavLink to="/reacttable" className={({isActive})=> isActive ? classes.active : undefined}>ReactTable</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
