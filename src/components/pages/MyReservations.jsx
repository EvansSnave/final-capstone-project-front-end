import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listOfReservations from '../../redux/reservations/actions/indexReservations';
import deleteReservations from '../../redux/reservations/actions/deleteReservations';
import doctor from '../../assets/reference.jpg';
import trash from '../../assets/trash-can.png';

const MyReservations = ({ id }) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.list);

  useEffect(() => {
    dispatch(listOfReservations(id));
  }, [dispatch]);

  const handleDelete = (reserveId) => {
    dispatch(deleteReservations(reserveId));
  };

  return (
    <div className="reservation">
      <ul className="reservation__list">
        {reservations.map((reservation) => (
          <>
            <div className="reservation__container" key={reservation.id}>
              <img className="reservation__image" alt="Doctor photo" src={doctor} />
              <li className="reservation__item">
                <p className="reservation__data">
                  Doctor id:
                  {reservation.doctorId}
                </p>
                <p className="reservation__data">
                  Reservation id:
                  {reservation.id}
                </p>
                <p className="reservation__data">
                  Date:
                  {reservation.scheduleDate}
                </p>
                <img
                  className="reservation__trash"
                  alt="trash icon"
                  src={trash}
                  onClick={() => handleDelete(reservation.id)}
                />
              </li>
              <div className="reservation__arrow" />
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
