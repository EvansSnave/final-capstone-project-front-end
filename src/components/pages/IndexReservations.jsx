import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../../redux/slices/reservations/reservationsSlice';

const IndexReservations = () => {
  const dispatch = useDispatch();

  const handleFetchreservations = () => {
    dispatch(fetchReservations());
  };

  useEffect(() => {
    handleFetchreservations();
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservationsList);

  return (
    <ul>
      {reservations.map((reservation) => (
        <li>
          <p>{reservation.id}</p>
          <p>{reservation.userId}</p>
          <p>{reservation.doctorid}</p>
          <p>{reservation.scheduleDate}</p>
        </li>
      ))}
    </ul>
  );
};

export default IndexReservations;
