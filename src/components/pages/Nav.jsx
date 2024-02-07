import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useState, useEffect } from 'react';
import { logoutUser } from '../../redux/users/usersSlice';
import logo from '../../assets/doc.png';
import burger from '../../assets/burger-black.png';

const Nav = () => {
  const dispatch = useDispatch();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const smallScreen = useMediaQuery('only screen and (max-width: 1000px)');
  const bigScreen = useMediaQuery('only screen and (min-width: 1001px)');

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  const handleBurgerClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleOverlayClick = () => {
    setIsMenuVisible(false);
  };

  useEffect(() => {
    if (bigScreen) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  }, [bigScreen]);

  return (
    <>
      {smallScreen && isMenuVisible && (
      <div className="navigator__overlay" onClick={handleOverlayClick} />
      )}
      {smallScreen && (
      <img
        className={`burger${isMenuVisible ? ' invisible' : ''}`}
        alt="nav icon"
        src={burger}
        onClick={handleBurgerClick}
      />
      )}
      <nav className={`navigator${isMenuVisible ? ' visible' : ''}`}>
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
    </>
  );
};

export default Nav;
