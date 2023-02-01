import { NavLink } from "react-router-dom";


import classes from './AjaxNavigation.module.css';

function AjaxNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({ isActive }) => isActive ? classes.active : undefined}
 to="/ajax" end>All Customer</NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? classes.active : undefined}
 to="/ajax/new">New Customer</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AjaxNavigation;