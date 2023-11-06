import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';

const LabSchedule = ({ laboratorio, date }) => {
  const [isReserved, setIsReserved] = useState(false);
  const timeSlots = Array.from({ length: 13 }, (_, i) => `${7 + i}:00`); // 8 AM to 5 PM, one-hour intervals

  useEffect(() => {
    // Replace `your-api-endpoint` with the actual endpoint you're using
    // Also, make sure to include any necessary headers or parameters
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`your-api-endpoint?laboratorio=${laboratorio}&date=${date}`);
        if (response.data.reservation) {
          setIsReserved(true);
        }
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservation();
  }, [laboratorio, date]);

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
                <td>{isReserved ? 'Reservado' : 'Libre'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default LabSchedule;
