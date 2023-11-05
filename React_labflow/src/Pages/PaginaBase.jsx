/*React*/
import React from "react";
/*Navbar para usuario sin permisos admin*/
import NavbarUsuario from "../Componentes/NavbarUsuario/NavbarUsuario";
/*Custom css*/
import "./PB.css";
import NavbarAdmin from "../Componentes/NavbarAdmin/NavbarAdmin";
import { useAuth } from "../contexts/auth";

const PaginaBase = ({ children}) => {
  const {user} = useAuth();
  return (
    <>
      <div className="pagina-base" styles={{ marginBottom: "10rem" }}>
        {/* navbar se incluye como componente, "children son los "
       componentes hijos (el front end de cada pagina individual)*/}
        {user.admin ? <NavbarAdmin /> : <NavbarUsuario />}
      </div>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default PaginaBase;
