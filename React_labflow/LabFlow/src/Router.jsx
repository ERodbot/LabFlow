import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Init from "./Pages/IniciarSesion/Init.jsx";
import PrincipalUsuario from "./Pages/PrincipalUsuario/PrincipalUsuario.jsx";
import Laboratorios from "./Pages/Laboratorios/Laboratorios.jsx";
import Reportes from "./Pages/Reportes/Reportes.jsx";
import ReservacionesInfo from "./Pages/Mis reservaciones info/ReservacionesInfo.jsx";
import MisReservaciones from "./Pages/Mis reservaciones/MisReservaciones.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Init />,
  },
  {
    path: "/PrincipalUsuario",
    element: <PrincipalUsuario />,
  },
  {
    path: "/Reservar",
    element: <Laboratorios />,
  },
  {
    path: "/Laboratorios",
    element: <Laboratorios />,
  },
  {
    path: "/Reportes",
    element: <Reportes />,
  },
  {
    path: "/Mis_reservaciones",
    element: <MisReservaciones />,
  },
  {
    path: "/Mis_reservaciones_info",
    element: <ReservacionesInfo />,
  },
  {
    path: "/Disponibilidad",
    element: <Laboratorios />,
  },
]);

export default Router;
