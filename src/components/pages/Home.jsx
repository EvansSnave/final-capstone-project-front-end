import PropTypes from 'prop-types';
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

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

Home.defaultProps = {
  id: null,
};

export default Home;
