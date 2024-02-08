import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDoctors } from '../../redux/slices/doctors/doctorsSlice';

const IndexDoctors = () => {
  const dispatch = useDispatch();

  const handleFetchDoctors = () => {
    dispatch(fetchDoctors());
  };

  useEffect(() => {
    handleFetchDoctors();
  });

  const doctors = useSelector((state) => state.doctors.list);

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          <p>{doctor.name}</p>
          <p>{doctor.age}</p>
          <p>{doctor.doctorId}</p>
          <p>{doctor.cityId}</p>
          <p>{doctor.userId}</p>
          <p>{doctor.description}</p>
          <p>{doctor.imageUrl}</p>
        </li>
      ))}
    </ul>
  );
};

export default IndexDoctors;
