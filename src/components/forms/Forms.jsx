import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import background from '../../assets/doctor-room-background.jpg';

const Forms = () => {
  const [login, setLogin] = useState(true);
  return (
    <main className="main__not-logged-in">
      <img className="main__image" alt="Doctor room" src={background} />
      <div className="main__forms-container">
        {login ? <LoginForm /> : <SignupForm />}
        <button type="button" className="main-form__button_out" onClick={() => setLogin(!login)}>
          {login ? 'Sign up' : 'Log in'}
        </button>
      </div>
    </main>
  );
};

export default Forms;
