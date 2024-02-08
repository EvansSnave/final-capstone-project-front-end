import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listOfReservations from '../../redux/reservations/actions/indexReservations';

const MyReservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOfReservations(7));
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.list);

  return (
    <ul>
      {reservations.map((reservation) => (
        <li key={reservation.id}>
          <p>{reservation.id}</p>
          <p>{reservation.user_id}</p>
          <p>{reservation.doctor_id}</p>
          <p>{reservation.schedule_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default MyReservations;
