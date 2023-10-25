import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Init from "./Pages/IniciarSesion/Init.jsx";
import PrincipalUsuario from "./Pages/PrincipalUsuario/PrincipalUsuario.jsx";
import Laboratorios from "./Pages/Laboratorios/Laboratorios.jsx";
import Reportes from "./Pages/Reportes/Reportes.jsx";
import ReservacionesInfo from "./Pages/Mis reservaciones info/ReservacionesInfo.jsx";
import MisReservaciones from "./Pages/Mis reservaciones/MisReservaciones.jsx";
import Reservar from "./Pages/Reservar/Reservar.jsx";
import Disponibilidad from "./Pages/Disponibilidad/Disponibilidad.jsx";
import AceptarDenegarReserva from "./Pages/AceptarDenegarReserva/AceptarDenegarReserva.jsx";
import VisualizarProblema from "./Pages/VisualizarProblema/VisualizarProblema.jsx";
import ManejoGeneral from "./Pages/ManejoGeneral/ManejoGeneral.jsx";
import ManejoLabs from "./Pages/ManejoLabs/ManejoLabs.jsx";
import AdministrarUsuario from "./Pages/AdministrarUsuario/AdministrarUsuario.jsx";
import LaboratoriosAdmin from "./Pages/LaboratoriosAdmin/LaboratoriosAdmin.jsx";
import AdministrarReservaciones from "./Pages/AdministrarReservaciones/AdministrarReservaciones.jsx";

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
    element: <Reservar />,
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
    element: <Disponibilidad />,
  },
  {
    path: "/Aceptar_Denegar",
    element: <AceptarDenegarReserva />,
  },
  {
    path: "/Visualizar_Problema",
    element: <VisualizarProblema />,
  },
  {
    path: "/Manejo_General",
    element: <ManejoGeneral />,
  },
  {
    path: "/Manejo_Laboratorios",
    element: <ManejoLabs />,
  },
  {
    path: "/Administrar_Usuario",
    element: <AdministrarUsuario />,
  },
  {
    path: "/Laboratorio_admin",
    element: <LaboratoriosAdmin />,
  },
  {
    path: "/Administrar_reservacion",
    element: <AdministrarReservaciones />,
  },
]);

export default Router;
