import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signupUser } from '../../redux/users/usersSlice';

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const password = watch('password');

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" name="name" {...register('name', {
          required: 'Name is required',
          maxLength: { value: 80, message: 'Name must be 80 or less characters long' }
        })} />
        {errors.name && (<p className="errorMsg">{errors.name.message}</p>)}
      </div>

      <div className="form-control">
        <label>Email</label>
        <input type="email" name="email" {...register('email', {
          required: 'Email is required',
          maxLength: { value: 255, message: 'Email must be 255 or less characters long' },
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                     message: 'Invalid email' }
        })} />
        {errors.email && (<p className="errorMsg">{errors.email.message}</p>)}
      </div>

      <div className="form-control">
        <label>Password</label>
        <input type="password" name="password" {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters long' },
          maxLength: { value: 40, message: 'Password cannot be more than 40 characters long' }
        })} />
        {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}
      </div>

      <div className="form-control">
        <label>Password confirmation</label>
        <input type="password" name="passwordConfirmation" {...register('passwordConfirmation', {
          required: 'Password confirmation is required',
          validate: (value) => value === password || 'Password confirmation and password do not match'
        })} />
        {errors.passwordConfirmation && (<p className="errorMsg">{errors.passwordConfirmation.message}</p>)}
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Sign up</button>
      </div>
      <p>Do you have an account?</p>
    </form>
  );
};

export default SignupForm;
