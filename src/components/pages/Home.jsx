import Nav from './Nav';
import RoutesApp from '../routes/RoutesApp';
import Forms from '../forms/Forms';

const Home = ({ loggedIn, id }) => (
  <>
    {loggedIn
      ? (
        <main className="main__logged-in">
          <Nav />
          <RoutesApp id={id} />
        </main>
      )
      : <Forms />}
  </>
);

export default Home;
