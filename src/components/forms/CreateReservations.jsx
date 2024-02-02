import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import createReservations from '../../redux/reservations/actions/createReservations';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';

const CreateReservations = ({ id }) => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const doctors = useSelector((state) => state.doctors.doctorsList);

  const doctorExist = (value) => doctors.some((doctor) => doctor.id === parseInt(value, 10));

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createReservations({ data, id }));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    reset();
  };

  useEffect(() => {
    dispatch(listOfDoctors());
  }, [doctors]);

  const isFutureDate = (value) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);
    return selectedDate > currentDate;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess && (<div>Reservation submitted successfully.</div>)}
      <div className="form-control">
        <label>Doctor id</label>
        <input
          type="number"
          name="doctorId"
          {...register('doctorId', {
            required: 'Doctor id is required',
            min: { value: 1, message: 'Doctor id must be greater than 0' },
            validate: doctorExist,
          })}
        />
        {errors.doctorId && (<p className="errorMsg">{errors.doctorId.message}</p>)}
        {errors.doctorId?.type === 'validate' && (<p className="errorMsg">Doctor id does not exist</p>)}
      </div>

      <div className="form-control">
        <label>Schedule date</label>
        <input
          type="date"
          name="scheduleDate"
          {...register('scheduleDate', {
            required: true, validate: isFutureDate,
          })}
        />
        {errors.scheduleDate?.type === 'required' && (<p className="errorMsg">Schedule date is required</p>)}
        {errors.scheduleDate?.type === 'validate' && (<p className="errorMsg">Schedule date must be in the future</p>)}
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Reserve doctor</button>
      </div>
    </form>
  );
};

export default CreateReservations;
