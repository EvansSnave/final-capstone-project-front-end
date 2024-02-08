import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import createReservations from '../../redux/reservations/actions/createReservations';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';
import bg from '../../assets/doctor-room-two.jpg';

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
  }, [dispatch]);

  const isFutureDate = (value) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);
    return selectedDate > currentDate;
  };

  return (
    <div className="reserve__container">
      <img className="reserve__bg" alt="Doctor room" src={bg} />
      <form className="reserve" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="reserve__title">RESERVE A DOCTOR</h1>
        <div className="reserve__separator" />
        {isSuccess && (<div className="success">Reservation submitted successfully.</div>)}
        <div className="reserve__control">
          <label className="reserve__label">Doctor id</label>
          <input
            className="reserve__input input__number"
            type="number"
            name="doctorId"
            {...register('doctorId', {
              required: 'Doctor id is required',
              min: { value: 1, message: 'Doctor id must be greater than 0' },
              validate: doctorExist,
            })}
          />
          {errors.doctorId && (<p className="errors">{errors.doctorId.message}</p>)}
          {errors.doctorId?.type === 'validate' && (<p className="errors">Doctor id does not exist</p>)}
        </div>

        <div className="reserve__control">
          <label className="reserve__label">Schedule date</label>
          <input
            placeholder="Schedule date"
            className="reserve__input"
            type="date"
            name="scheduleDate"
            {...register('scheduleDate', {
              required: true, validate: isFutureDate,
            })}
          />
          {errors.scheduleDate?.type === 'required' && (<p className="errors">Schedule date is required</p>)}
          {errors.scheduleDate?.type === 'validate' && (<p className="errors">Schedule date must be in the future</p>)}
        </div>

        <button className="reserve__button" type="submit">Reserve doctor</button>
      </form>
    </div>
  );
};

CreateReservations.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CreateReservations;
