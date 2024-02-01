import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listOfReservations from '../../redux/reservations/actions/indexReservations';

const MyReservations = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOfReservations(id));
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.list);

  return (
    <ul>
      {reservations.map((reservation) => (
        <li>
          <p>{reservation.id}</p>
          <p>{reservation.userId}</p>
          <p>{reservation.doctorId}</p>
          <p>{reservation.scheduleDate}</p>
        </li>
      ))}
    </ul>
  );
};

export default MyReservations;
