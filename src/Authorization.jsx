import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from './redux/users/usersSlice';
import Home from './components/pages/Home';

const Authorization = () => {
  const authorized = useSelector((state) => state.users.info);
  const userId = useSelector((state) => state.users.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch, authorized]);

  if (authorized) {
    return <Home loggedIn id={userId} />;
  }

  return <Home loggedIn={false} id={null} />;
};

export default Authorization;
