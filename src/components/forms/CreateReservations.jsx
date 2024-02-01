import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import createReservations from '../../redux/reservations/actions/createReservations';

const CreateReservations = ({ id }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createReservations({data, id}));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>Doctor id</label>
        <input type="number" name="doctorId" {...register('doctorId')} />
      </div>

      <div className="form-control">
        <label>Schedule date</label>
        <input type="date" name="scheduleDate" {...register('scheduleDate')} />
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Reserve doctor</button>
      </div>
    </form>
  );
};

export default CreateReservations;
