import { NavLink } from "react-router-dom";


import classes from './AxiosNavigation.module.css';

function AxiosNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({ isActive }) => isActive ? classes.active : undefined}
 to="/axios" end>All Customer</NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? classes.active : undefined}
 to="/axios/new">New Customer</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AxiosNavigation;