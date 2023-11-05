import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Button,
  Container,
  Dropdown,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import PaginaBase from "../../PaginaBase";
import "./Disponibilidad.css";
import eventstest from "./Disponibilidad.json";
import labstest from "./Labs.json";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = React.useState([]); // Initialize events as an empty array
  const [selectedLab, setSelectedLab] = React.useState(null);

  const selectLab = (event) => {
    console.log("check");
    setSelectedLab(event.target.value);
  };

  const prueba = () => {
    setSelectedLab("lab1");
  };

  React.useEffect(() => {
    console.log("nice");
    if (selectedLab) {
      console.log("ok");
      const labData = eventstest.laboratorios.find(
        (labtested) => labtested.lab == selectedLab
      );
      console.log(labData);

      if (labData) {
        const labEvents = labData.reservaciones.map((evento) => ({
          title: evento.title,
          start: new Date(evento.start),
          end: new Date(evento.end),
        }));
        // Set the events state with the selected lab's events
        setEvents(labEvents);
        console.log("labs has events", labEvents);
      }
    }
  }, [selectedLab]);

  return (
    <PaginaBase>
      <Container>
        <Card className="card-calendar">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            min={new Date(0, 0, 0, 7, 0)}
            max={new Date(0, 0, 0, 19, 0)}
          />
          <Dropdown as={ButtonGroup} className="w-25 mt-5 mb-3 mx-auto">
            <Button id="button-style">
              {selectedLab ? selectedLab : "Laboratorio"}
            </Button>
            <Dropdown.Toggle
              className="dropdown-style"
              split
              id="dropdown-split-lab"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              {labstest.labs.map((laboption) => (
                <Dropdown.Item
                  onClick={() => {
                    setSelectedLab(laboption);
                  }}
                  key={laboption}
                  eventKey={laboption}
                >
                  {laboption}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card>
      </Container>
    </PaginaBase>
  );
};

export default MyCalendar;
