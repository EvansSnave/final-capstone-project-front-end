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
  }, [doctors]);

  const onSubmit = (data) => {
    dispatch(deleteDoctors(data));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess && (<div>Doctor deleted successfully.</div>)}
      <div className="form-control">
        <label>Doctor id</label>
        <input
          type="number"
          name="id"
          {...register('id', {
            required: 'Doctor id is required',
            min: { value: 1, message: 'Doctor id must be greater than 0' },
            validate: doctorExist,
          })}
        />
        {errors.id && (<p className="errorMsg">{errors.id.message}</p>)}
        {errors.id?.type === 'validate' && (<p className="errorMsg">Doctor id does not exist</p>)}
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Delete Doctor</button>
      </div>
    </form>
  );
};

export default DeleteDoctors;
