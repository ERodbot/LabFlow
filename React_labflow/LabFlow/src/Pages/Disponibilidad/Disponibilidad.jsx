import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Card } from "react-bootstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Container } from "react-bootstrap";
import PaginaBase from "../PaginaBase";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Mi evento",
      start: new Date(2023, 10, 15),
      end: new Date(2023, 10, 15),
    },
    // Agrega más eventos aquí
  ]);

  const handleSelectEvent = (event) => {
    // Aquí puedes abrir una página o realizar cualquier acción al seleccionar un evento
    console.log("Evento seleccionado:", event);
    // Redirige a la página deseada
    // window.location.href = '/tu-pagina';
  };

  return (
    <PaginaBase>
      <Container>
        <Card>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
            // Agregar otras opciones de configuración, como `views`, `toolbar`, etc.
          />
          <Button href="/tu-pagina" variant="primary" className="my-3">
            Ir a la página
          </Button>
        </Card>
      </Container>
    </PaginaBase>
  );
};

export default MyCalendar;
