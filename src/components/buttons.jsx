/**
 * Este elemento se importara en el elemento Nav.
 * Botones del Nav.
 * @returns button para el Nav.
 * 
 * @author Alejandro De la Huerga 
 * @since 05/03/2026
 */

function BotonNav(props){

    const handleClick = () =>{
        alert(`Has pulsado el boton ${props.name}`);
    }

    return(
        <button onClick={handleClick} id={"botonNav"+props.name}> {props.name} </button>
    )
}


export default BotonNav;