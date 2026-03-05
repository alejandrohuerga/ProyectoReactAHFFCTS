import { Nav, NavAdmin } from "./Nav";
import DatosUsuario from "../assets/Admin.json";
import BotonNav from "./buttons";

/**
 * Función con el componente nav. 
 * Esta función o componente nos permitira poner dicho nav siempre y cuando lo necesitemos.
 * Debemos importarla en el archivo App.jsx si es alli donde queremos importarla para poder 
   usar este elemento en el index.
 *
 * @author Alejandro De la Huerga.
 * @since 05/03/2026
 */

function Header() {
  const usuario = DatosUsuario.usuario[0];

  return (
    <header className="d-flex flex-column justify-content-center align-items-center bg-info text-white p-3">
      <h1 className="text-black">Aplicación React</h1>
      <h2 className="text-black">Alejandro De la Huerga</h2>

      <nav className="d-flex gap-2 mt-3">
        {usuario.menu.map((item, index) => (
          <BotonNav key={index} name={item.texto} />
        ))}
      </nav>
    </header>
  );
}

export default Header;