import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import deleteDoctors from '../../redux/doctors/actions/deleteDoctors';

const DeleteDoctors = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(deleteDoctors(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>Doctor id</label>
        <input type="number" name="id" {...register('id')} />
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Delete Doctor</button>
      </div>
    </form>
  );
};

export default DeleteDoctors;
