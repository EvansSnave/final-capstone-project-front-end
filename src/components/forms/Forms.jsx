import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Forms = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setLogin(!login)}>
        {login ? 'Sign up' : 'Log in'}
      </button>
    </div>
  );
};

export default Forms;
