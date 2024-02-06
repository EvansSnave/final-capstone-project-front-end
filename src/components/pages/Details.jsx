import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import listOfDoctors from '../../redux/doctors/actions/listOfDoctors';
import detailsDoctors from "../../redux/doctors/actions/detailsDoctors";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.doctors.details);
  const doctors = useSelector((state) => state.doctors.doctorsList);
  let { id } = useParams();

  useEffect(() => {
    dispatch(detailsDoctors(id))
    dispatch(listOfDoctors())
  }, [dispatch, id]);

  const doctor = doctors.find((doctor) => doctor.id == id);

  const reserve = () => {
    navigate('/reserve');
  };

  const back = () => {
    navigate('/');
  };

  return (
    <div className='details'>
      <button className="details__arrow" onClick={back}>{'<'}</button>
      <div className='details__image-container'>
        <img src={`http://localhost:4000${doctor.imageUrl}`} alt='doctor face' className='details__image'/>
      </div>
      <div className='details__container'>
        <h1 className='details__title'>DOCTOR DETAILS</h1>
        <ul className='details__list'>
          <li className='details__item unique_color'>
            <div className='details__text'>Doctor id</div>
            <div className='details__info'>{details.id}</div>
          </li>
          <li className='details__item'>
            <div className='details__text'>price</div>
            <div className='details__info'>{details.price}</div>
          </li>
          <li className='details__item unique_color'>
            <div className='details__text'>Specialization</div>
            <div className='details__info'>{details.specialization}</div>
          </li>
          <li className='details__item'>
            <div className='details__text'>Studies</div>
            <div className='details__info'>{details.studies}</div>
          </li>
        </ul>
        <button onClick={reserve} className='details__button'>RESERVE</button>
      </div>
    </div>
  );
};

export default Details;
