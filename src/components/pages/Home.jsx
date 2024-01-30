import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../routes/Nav';
import IndexDoctors from './IndexDoctors';
import LoginForm from '../forms/LoginForm';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const statusCode = useSelector((state) => state.users.status.code);

  useEffect(() => {
    if (statusCode === 200) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [statusCode]);

  return (
    <main>
      {isLoggedIn
        ? (
          <section>
            <Nav />
            <IndexDoctors />
          </section>
        )
        : (
          <LoginForm />
        )}
    </main>
  );
};

export default Home;
