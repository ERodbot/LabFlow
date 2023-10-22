import React from "react";
import NavbarUsuario from "../Componentes/NavbarUsuario/NavbarUsuario";

const PaginaBase = ({ children }) => {
  return (
    <div>
      <NavbarUsuario />
      {children}
    </div>
  );
};
export default PaginaBase;
