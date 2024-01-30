import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import loginUsers from '../../redux/slices/users/actions/loginUsers';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  const statusCode = useSelector((state) => state.users.status.code);

  useEffect(() => {
    if (statusCode === 200) {
      setIsLoggedIn(true);
    }
  }, [statusCode]);

  const onSubmit = (data) => {
    dispatch(loginUsers(data));
  };

  return (
    <>
      {isLoggedIn ? 
        <Navigate to="/" />
        : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Name</label>
              <input type="text" name="name" {...register('name')} />
            </div>

            <div className="form-control">
              <label>Email</label>
              <input type="email" name="email" {...register('email')} />
            </div>

            <div className="form-control">
              <label>Password</label>
              <input type="password" name="password" {...register('password')} />
            </div>

            <div className="form-control">
              <label>Submit</label>
              <button type="submit">Login</button>
            </div>
          </form>
        )}
    </>
  );
};

export default LoginForm;
