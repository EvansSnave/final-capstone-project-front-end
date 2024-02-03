import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';

const DoctorsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOfDoctors());
  }, []);

  const doctors = useSelector((state) => state.doctors.doctorsList);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(doctors.length / 3);

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const handleForward = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <button className='carousel__back-button' onClick={handleBack}>Back</button>
      <ul className="carousel__slides">
        {doctors.slice(currentSlide * 3, (currentSlide + 1) * 3).map((doctor) => (
          <li className='carousel__item' key={doctor.id}>
            <p className='carousel__item-detail'>Id: {doctor.id}</p>
            <p className='carousel__item-detail'>City id: {doctor.cityId}</p>
            <p className='carousel__item-detail'>User id: {doctor.userId}</p>
            <p className='carousel__item-detail'>Name: {doctor.name}</p>
            <p className='carousel__item-detail'>Description: {doctor.description}</p>
            <p className='carousel__item-detail'>Age{doctor.age}</p>
          </li>
        ))}
      </ul>
      <button className='carousel__forward-button' onClick={handleForward}>Forward</button>
    </div>
  );
};

export default DoctorsList;
