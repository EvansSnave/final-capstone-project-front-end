import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';

const DoctorsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOfDoctors());
  }, [dispatch]);

  const doctors = useSelector((state) => state.doctors.doctorsList);
  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          <p>{doctor.id}</p>
          <p>{doctor.cityId}</p>
          <p>{doctor.userId}</p>
          <p>{doctor.name}</p>
          <p>{doctor.description}</p>
          <p>{doctor.age}</p>
        </li>
      ))}
    </ul>
  );
};

export default DoctorsList;
