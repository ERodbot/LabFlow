import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import { reservaLab } from '../../api/lab';

const LabSchedule = ({ laboratorio, date, reservationChange }) => {
  const [reservedSlots, setReservedSlots] = useState([]);
  const timeSlots = Array.from({ length: 13 }, (_, i) => `${7 + i}:00`);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await reservaLab(laboratorio, date);
        console.log(response.data);

        const slots = response.data.map(reservation => {
          const startTime = parseInt(reservation.inicio.split(':')[0], 10);
          const endTime = parseInt(reservation.final.split(':')[0], 10);
          return Array.from({ length: endTime - startTime }, (_, i) => `${startTime + i}:00`);
        }).flat();

        setReservedSlots(slots);
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservation();
  }, [laboratorio, date, reservationChange]);

  const checkIfReserved = (timeSlot) => {
    return reservedSlots.includes(timeSlot);
  };

  return (
    <Card className="mb-3">
      <Card.Header as="h5">{laboratorio}</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Horario</th>
              <th>{date}</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot, index) => (
              <tr key={index}>
                <td>{timeSlot}</td>
                <td>{checkIfReserved(timeSlot) ? 'Reservado' : 'Libre'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default LabSchedule;
