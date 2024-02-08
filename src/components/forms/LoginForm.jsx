import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { loginUser } from '../../redux/users/usersSlice';
import logo from '../../assets/doc-no-bg.png';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [user, setUser] = useState(true);
  const [dataToSubmit, setDataToSubmit] = useState(null);

  const dispatch = useDispatch();

  const userExists = async (data) => {
    const info = await axios.get('http://localhost:4000/users');
    const { username } = data;
    const users = info.data;
    const exists = users.find((user) => user.username === username);
    setUser(exists !== undefined);
    setDataToSubmit(data);
  };

  const onSubmit = (data) => {
    userExists(data);
  };

  useEffect(() => {
    if (user && dataToSubmit) {
      dispatch(loginUser(dataToSubmit));
    }
  }, [user, dataToSubmit, dispatch]);

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <img className="login__logo" alt="page logo" src={logo} />
      <h1 className="login__title">LOGIN</h1>

      <div className="login__control">
        <input
          placeholder="Username"
          className="login__input"
          type="text"
          name="username"
          {...register('username', {
            required: 'Username is required',
          })}
        />
        {errors.username && (<p className="login__errors">{errors.username.message}</p>)}
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
        <button className="login__button" type="submit">Login</button>
        {user === false && (<p className="login__errors">Invalid email or password</p>)}
      </div>
      <p className="login__to-sign-up">Need an account?</p>
    </form>
  );
};

export default LoginForm;
