import {Nav,NavAdmin} from "./Nav";

import DatosUsuario from "../assets/Admin.json";

/**
 * Función con el componente nav. 
 * Esta función o componente nos permitira poner dicho nav siempre y cuando lo necesitemos.
 * Debemos importarla en el archivo App.jsx si es alli donde queremos importarla para poder 
   usar este elemento en el index.
 *
 * @author Alejandro De la Huerga.
 * @since 05/03/2026
 */

function Header(){
    return (
      <header className="d-flex flex-column justify-content-center align-items-center bg-info text-white">
        <h1 className="text-black">Aplicación React</h1>
        <h2 className="text-black">Alejandro De la Huerga</h2>

        {DatosUsuario.usuario.map((usuario, index) => (
            usuario.tipo === "admin" ? (
              <NavAdmin key={index} />
            ) : (
              <Nav key={index} />
            )
        ))}
      </header>
  );
}

export default Header;