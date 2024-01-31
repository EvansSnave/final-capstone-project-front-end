import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { currentUser } from './redux/users/usersSlice';

const Authorization = () => {
  const authorized = useSelector((state) => state.users.info);
  const [isLoggedIn, setIsLoggedIn] = useState(authorized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    if (authorized) {
      setIsLoggedIn(true);
      } else {
      setIsLoggedIn(false);
    }
  }, [authorized]);

  return (
    <>
      {isLoggedIn
        ? <Navigate to="/" />
        : <Navigate to="/login" />}
    </>
  );
};

export default Authorization;
