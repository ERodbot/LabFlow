/*React*/
import React from "react";
/*Navbar para usuario sin permisos admin*/
import NavbarUsuario from "../Componentes/NavbarUsuario/NavbarUsuario";
/*Custom css*/
import "./PB.css";
import NavbarAdmin from "../Componentes/NavbarAdmin/NavbarAdmin";

const PaginaBase = ({ children, isadmin = false }) => {
  return (
    <>
      <div className="pagina-base" styles={{ marginBottom: "10rem" }}>
        {/* navbar se incluye como componente, "children son los "
       componentes hijos (el front end de cada pagina individual)*/}
        {isadmin ? <NavbarAdmin /> : <NavbarUsuario />}
      </div>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default PaginaBase;
