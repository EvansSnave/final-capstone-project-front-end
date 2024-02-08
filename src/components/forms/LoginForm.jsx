import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../redux/users/usersSlice';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
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
  );
};

export default LoginForm;
