/**
 * Este elemento se importara en el elemento Nav.
 * Botones del Nav.
 * @returns button para el Nav.
 * 
 * @author Alejandro De la Huerga 
 * @since 05/03/2026
 */

function BotonNav(props){
    return(
        <button className="btn btn-outline-dark m-3" id={"botonNav"+props.name}> {props.name} </button>
    )
}
    
export default BotonNav;