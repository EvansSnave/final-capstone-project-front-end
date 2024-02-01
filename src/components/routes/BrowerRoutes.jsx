import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/store';
import RoutesApp from './RoutesApp';

const Browser = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

export default Browser;
