import Nav from './Nav';
import RoutesApp from '../routes/RoutesApp';
import Forms from '../forms/Forms';

const Home = ({ loggedIn, id }) => (
  <>
    {loggedIn
      ? (
        <main>
          <Nav />
          <RoutesApp id={id} />
        </main>
      )
      : <Forms />}
  </>
);

export default Home;
