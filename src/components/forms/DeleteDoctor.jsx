import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import deleteDoctors from '../../redux/doctors/actions/deleteDoctors';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';

const DeleteDoctors = () => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const doctors = useSelector((state) => state.doctors.doctorsList);

  const doctorExist = (value) => doctors.some((doctor) => doctor.id === parseInt(value, 10));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOfDoctors());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(deleteDoctors(data));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    reset();
  };

  return (
    <div className="doctor__cont delete">
      <form className="doctor" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="doctor__title">DELETE DOCTOR</h1>
        {isSuccess && (<div className="success">Doctor deleted successfully.</div>)}
        <div className="doctor__control delete__control">
          <input
            placeholder="Doctor id"
            className="doctor__input input_delete"
            type="number"
            name="id"
            {...register('id', {
              required: 'Doctor id is required',
              min: { value: 1, message: 'Doctor id must be greater than 0' },
              validate: doctorExist,
            })}
          />
          {errors.id && (<p className="errors">{errors.id.message}</p>)}
          {errors.id?.type === 'validate' && (<p className="errors">Doctor id does not exist</p>)}
        </div>

        <button className="doctor__button" type="submit">Delete Doctor</button>
      </form>
    </div>
  );
};

export default DeleteDoctors;
