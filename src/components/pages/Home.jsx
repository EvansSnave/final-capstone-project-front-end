import Nav from './Nav';
import LoginForm from '../forms/LoginForm';
import RoutesApp from '../routes/RoutesApp';

const Home = ({ loggedIn, id }) => {
  return (
    <>
      {loggedIn
      ? 
        <main>
          <Nav />
          <RoutesApp id={id} />
        </main>
      :
        <LoginForm />
      }
    </>
  );
};

export default Home;
