import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Authorization = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenAuth');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? 
        <Navigate to="/" />
      :
        <Navigate to="/login" />
      }
    </>
  );
};

export default Authorization;
