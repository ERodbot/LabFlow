import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Init from "./Pages/IniciarSesion/Init.jsx";
import Principal from "./Pages/Principal/Principal.jsx";
import Laboratorios from "./Pages/Usuario/Laboratorios/Laboratorios.jsx";
import Reportes from "./Pages/Usuario/Reportes/Reportes.jsx";
import ReservacionesInfo from "./Pages/Usuario/Mis reservaciones info/ReservacionesInfo.jsx";
import MisReservaciones from "./Pages/Usuario/Mis reservaciones/MisReservaciones.jsx";
import Reservar from "./Pages/Usuario/Reservar/Reservar.jsx";
import Disponibilidad from "./Pages/Usuario/Disponibilidad/Disponibilidad.jsx";
import AceptarDenegarReserva from "./Pages/admin/AceptarDenegarReserva/AceptarDenegarReserva.jsx";
import VisualizarProblema from "./Pages/admin/VisualizarProblema/VisualizarProblema.jsx";
import ManejoGeneral from "./Pages/admin/ManejoGeneral/ManejoGeneral.jsx";
import ManejoLabs from "./Pages/admin/ManejoLabs/ManejoLabs.jsx";
import AdministrarUsuario from "./Pages/admin/AdministrarUsuario/AdministrarUsuario.jsx";
import LaboratoriosAdmin from "./Pages/admin/LaboratoriosAdmin/LaboratoriosAdmin.jsx";
import AdministrarReservaciones from "./Pages/admin/AdministrarReservaciones/AdministrarReservaciones.jsx";
import Recuperar1 from "./Pages/Recuperar1/Recuperar1.jsx";
import Recuperar2 from "./Pages/Recuperar2/Recuperar2.jsx";
import RegistrationForm from "./Pages/Registro/Registro.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Iniciar_sesion",
    element: <Init />,
  },
  {
    path: "/Registrarse",
    element: <RegistrationForm />,
  },
  {
    path: "/Recuperar",
    element: <Recuperar1 />,
  },
  {
    path: "/Recuperar2",
    element: <Recuperar2 />,
  },
  {
    path: "/Principal",
    element: <Principal />,
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
    path: "/Laboratorios_admin",
    element: <LaboratoriosAdmin />,
  },
  {
    path: "/Administrar_reservacion",
    element: <AdministrarReservaciones />,
  },
]);

export default Router;
