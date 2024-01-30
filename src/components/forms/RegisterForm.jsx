import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import registerUser from '../../redux/slices/users/actions/registerUsers';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
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
        <label>Password confirmation</label>
        <input type="password" name="passwordConfirmation" {...register('passwordConfirmation')} />
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};

export default RegisterForm;
