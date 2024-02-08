import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { signupUser } from '../../redux/users/usersSlice';
import logo from '../../assets/doc-no-bg.png';

const SignupForm = () => {
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();

  const emailExists = async (data) => {
    const users = await axios.get('http://localhost:4000/users');
    const email = users.data.find((user) => user.email === data);
    if (email) {
      return false;
    }
    return true;
  };

  const password = watch('password');

  const onSubmit = (data) => {
    dispatch(signupUser(data));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    reset();
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <img className="login__logo" alt="page logo" src={logo} />
      <h1 className="login__title">SIGNUP</h1>
      <div className="login__control">
        <input
          placeholder="Name"
          className="login__input"
          type="text"
          name="name"
          {...register('name', {
            required: 'Name is required',
            maxLength: { value: 80, message: 'Name must be 80 or less characters long' },
          })}
        />
        {errors.name && (<p className="login__errors">{errors.name.message}</p>)}
      </div>

      <div className="login__control">
        <input
          placeholder="Email"
          className="login__input"
          type="email"
          name="email"
          {...register('email', {
            required: 'Email is required',
            maxLength: { value: 255, message: 'Email must be 255 or less characters long' },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email',
            },
            validate: emailExists,
          })}
        />
        {errors.email && (<p className="login__errors">{errors.email.message}</p>)}
        {errors.email?.type === 'validate' && (<p className="login__errors">Email already exists</p>)}
      </div>

      <div className="login__control">
        <input
          placeholder="Password"
          className="login__input"
          type="password"
          name="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
            maxLength: { value: 40, message: 'Password cannot be more than 40 characters long' },
          })}
        />
        {errors.password && (<p className="login__errors">{errors.password.message}</p>)}
      </div>

      <div className="login__control">
        <input
          placeholder="Password confirmation"
          className="login__input"
          type="password"
          name="passwordConfirmation"
          {...register('passwordConfirmation', {
            required: 'Password confirmation is required',
            validate: (value) => value === password || 'Password confirmation and password do not match',
          })}
        />
        {errors.passwordConfirmation && (<p className="login__errors">{errors.passwordConfirmation.message}</p>)}
      </div>

      <div className="login__control">
        <button className="login__button" type="submit">Sign up</button>
        {isSuccess && (<div className="success">Account created successfully</div>)}
      </div>
      <p className="login__to-sign-up">Do you have an account?</p>
    </form>
  );
};

export default SignupForm;
