import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/users/usersSlice';
import logo from '../../assets/doc.png';

const Nav = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navigator">
      <img className="navigator__img" alt="page icon" src={logo} />
      <ul className="navigator__list">
        <NavLink className="navigator__list-link" to="/">DOCTORS</NavLink>
        <NavLink className="navigator__list-link" to="/reserve">RESERVE A DOCTOR</NavLink>
        <NavLink className="navigator__list-link" to="/myreservations">MY RESERVATIONS</NavLink>
        <NavLink className="navigator__list-link" to="/createdoctors">ADD A DOCTOR</NavLink>
        <NavLink className="navigator__list-link" to="/deletedoctor">DELETE A DOCTOR</NavLink>
        <button className="navigator__list-link" onClick={handleLogOut}>LOGOUT</button>
      </ul>
    </nav>
  );
};

export default Nav;
