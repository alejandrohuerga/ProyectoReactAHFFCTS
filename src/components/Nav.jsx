import BotonNav from "./buttons"
/**
 * Componente Nav el cual importaremos en el archivo App.jsx
 * Lo importaremos exactamente dentro del header.
 * Tiene importados dentro el elemento botón que hemos creado para el nav. 
 * @returns 
 * 
 * @author Alejandro De la Huerga 
 * @since 05/03/2026
*/

function Nav(){
    return(
        <nav className="navMain">
            <ul className="listaBotones">
                <BotonNav name="Inicio"></BotonNav>
                <BotonNav name="Perfil"></BotonNav>
                <BotonNav name="Seguidores"></BotonNav>
            </ul>    
        </nav>
    );
}

export default Nav;