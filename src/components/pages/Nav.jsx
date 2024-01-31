import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/users/usersSlice';

const Nav = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <img />
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
        <li>
          <button onClick={handleLogOut}>LOGOUT</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
