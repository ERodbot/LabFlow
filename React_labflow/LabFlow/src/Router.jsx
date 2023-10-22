import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Init from "./Pages/IniciarSesion/Init.jsx";
import PrincipalUsuario from "./Pages/PrincipalUsuario/PrincipalUsuario.jsx";
import Laboratorios from "./Pages/Laboratorios/Laboratorios.jsx";

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
    path: "/Laboratorios",
    element: <Laboratorios />,
  },
]);

export default Router;
