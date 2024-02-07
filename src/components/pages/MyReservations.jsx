import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import listOfReservations from '../../redux/reservations/actions/indexReservations';
import deleteReservations from '../../redux/reservations/actions/deleteReservations';
import trash from '../../assets/trash-can.png';

const MyReservations = ({ id }) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.list);

  useEffect(() => {
    dispatch(listOfReservations(id));
  }, [dispatch, id]);

  const handleDelete = (reserveId) => {
    dispatch(deleteReservations(reserveId));
  };

  return (
    <div className="reservation">
      <ul className="reservation__list">
        {reservations.length > 0
          ? reservations.map((reservation) => (
            <div className="reservation__container" key={reservation.id}>
              <img className="reservation__image" alt="Doctor profile" src={reservation.doctorImage} />
              <li className="reservation__item">
                <p className="reservation__data">
                  Doctor id:
                  {' '}
                  {reservation.doctorId}
                </p>
                <p className="reservation__data">
                  City id:
                  {' '}
                  {reservation.cityId}
                </p>
                <p className="reservation__data">
                  Reservation id:
                  {' '}
                  {reservation.id}
                </p>
                <p className="reservation__data">
                  Date:
                  {' '}
                  {reservation.scheduleDate}
                </p>
                <div
                  className="trash__container"
                  onClick={() => handleDelete(reservation.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleDelete(reservation.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img className="reservation__trash" alt="trash icon" src={trash} />
                </div>
              </li>
              <div className="reservation__arrow" />
            </div>
          ))
          : <div className="empty">There are not reservations yet</div>}
      </ul>
    </div>
  );
};

MyReservations.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MyReservations;
