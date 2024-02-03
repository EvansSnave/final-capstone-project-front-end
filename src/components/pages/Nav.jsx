import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/users/usersSlice';

const Nav = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className='navigator'>
      <img className='navigator__img'/>
      <ul className='navigator__list'>
        <li className='navigator__list-item_doctors-container'>
          <NavLink className='navigator__list-link_doctors' to="/">DOCTORS</NavLink>
        </li>
        <li className='navigator__list-item_reserve-doctor-container'>
          <NavLink className='navigator__list-link_reserve-doctor' to="/reserve">RESERVE A DOCTOR</NavLink>
        </li>
        <li className='navigator__list-item_my-reservations-container'>
          <NavLink className='navigator__list-link_my-reservations' to="/myreservations">MY RESERVATIONS</NavLink>
        </li>
        <li className='navigator__list-item_add-doctor-container'>
          <NavLink className='navigator__list-link_add-doctor' to="/createdoctors">ADD A DOCTOR</NavLink>
        </li>
        <li className='navigator__list-item_delete-doctor-container'>
          <NavLink className='navigator__list-link_delete-doctor' to="/deletedoctor">DELETE A DOCTOR</NavLink>
        </li>
        <li className='navigator__list-item_logout-button-container'>
          <button className='navigator__list-button' onClick={handleLogOut}>LOGOUT</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
