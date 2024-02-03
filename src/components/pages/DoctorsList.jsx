import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';

const DoctorsList = () => {
  const dispatch = useDispatch();
  const [sliderRef, setSliderRef] = useState(null)

  useEffect(() => {
    dispatch(listOfDoctors());
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const doctors = useSelector((state) => state.doctors.doctorsList);
  return (
    <ul className='carousel'>
      <div className='carousel__text'>
        <h1 className='carousel__title'>DOCTORS</h1>
        <p className='carousel__sub-title'>Select a doctor to see details</p>
        <div className='carousel__decoration'>
          ...............................................
          </div>
      </div>
      <button className='carousel__arrow_prev arrow' onClick={sliderRef?.slickPrev}>{"<"}</button>
      <Slider className='carousel__slides' ref={setSliderRef} {...settings}>
          {doctors.map((doctor) => (
          <li className='carousel__slide-container'>
            <div className='carousel__details'>
              <p className='carousel__name'>{doctor.name}</p>
              <p className='carousel__details'>{doctor.description}</p>
              <div className='carousel__info'>
                <p>{doctor.id}</p>
                <p>{doctor.cityId}</p>
                <p>{doctor.userId}</p>
                <p>{doctor.age}</p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
      <button className='carousel__arrow_next arrow' onClick={sliderRef?.slickNext}>{">"}</button>
    </ul>
  );
};

export default DoctorsList;
