import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <img alt="logo" />
    <ul>
      <li>
        <NavLink to="/">DOCTORS</NavLink>
      </li>
      <li>
        <NavLink to="#">RESERVE A DOCTOR</NavLink>
      </li>
      <li>
        <NavLink to="#">MY RESERVATIONS</NavLink>
      </li>
      <li>
        <NavLink to="#">ADD A DOCTOR</NavLink>
      </li>
      <li>
        <NavLink to="#">DELETE A DOCTOR</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
