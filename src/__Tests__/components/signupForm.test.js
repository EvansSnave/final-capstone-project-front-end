import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import server from '../../mocks/servers'; // Import your mock server
import SignupForm from '../../components/forms/SignupForm'; // Update with your actual import path

const mockStore = configureStore();
let store;

beforeAll(() => server.listen()); // Start the server
afterEach(() => server.resetHandlers()); // Reset any runtime request handlers
afterAll(() => server.close()); // Clean up once the tests are done

test('renders the signup form and submits data', async () => {
  store = mockStore({
    users: { }, // Add initial state if any
  });

  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <SignupForm />
    </Provider>,
  );

  fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Test Name' } });
  fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testusername' } });
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@email.com' } });
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
  fireEvent.change(getByPlaceholderText('Password confirmation'), { target: { value: 'password123' } });

  fireEvent.click(getByText('SIGNUP'));

  await waitFor(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(signupUser({
      name: 'Test Name',
      username: 'testusername',
      email: 'test@email.com',
      password: 'password123',
    }));
  });
});
