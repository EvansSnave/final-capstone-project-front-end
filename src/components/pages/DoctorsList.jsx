import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';
import logo from '../../assets/reference.jpg';
import { useNavigate } from 'react-router-dom';

const DoctorsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    dispatch(listOfDoctors());
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      }
    ]
  };

  const details = (id) => {
    navigate(`/${id}`);
  }

  const doctors = useSelector((state) => state.doctors.doctorsList);
  return (
    <ul className="carousel">
      <div className="carousel__text">
        <h1 className="carousel__title">DOCTORS</h1>
        <p className="carousel__sub-title">Select a doctor to see details</p>
        <div className="carousel__decoration">
          ...............................................
        </div>
      </div>
      <button className="carousel__arrow_prev arrow" onClick={sliderRef?.slickPrev}>{'<'}</button>
      <Slider className="carousel__slides" ref={setSliderRef} {...settings}>
        {doctors.map((doctor) => (
          <li className="carousel__slide-container">
            <div className="carousel__img_container">
              <img onClick={() => details(doctor.id)} src={logo} alt="Doctors face" className="carousel__image" />
            </div>
            <div className="carousel__details">
              <p className="carousel__name">{doctor.name}</p>
              <div className="carousel__decoration">
                .........................
              </div>
              <div className="carousel__description">{doctor.description}</div>
              <div className="carousel__info">
                <p className="carousel__data">
                  Doctor id:
                  {doctor.id}
                </p>
                <p className="carousel__data">
                  City id:
                  {doctor.cityId}
                </p>
                <p className="carousel__data">
                  Age:
                  {doctor.age}
                </p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
      <button className="carousel__arrow_next arrow" onClick={sliderRef?.slickNext}>{'>'}</button>
    </ul>
  );
};

export default DoctorsList;
