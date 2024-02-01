import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from './redux/users/usersSlice';
import Home from './components/pages/Home';

const Authorization = () => {
  const authorized = useSelector((state) => state.users.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (authorized) {
    return <Home loggedIn={true} />
  }

  return <Home loggedIn={false} />;
};

export default Authorization;
