import { Navigate } from 'react-router-dom';
import DoctorsList from './DoctorsList';
import Nav from './Nav';
import LoginForm from '../forms/LoginForm';
import RoutesApp from '../routes/RoutesApp';

const Home = ({ loggedIn }) => (
  <>
    {loggedIn
    ? 
      <main>
        <Nav />
        <RoutesApp />
      </main>
    :
      <LoginForm />
    }
  </>
);

export default Home;
