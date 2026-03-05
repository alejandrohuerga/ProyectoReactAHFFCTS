import DatosUsuarios from "../assets/Datos.json";

/**
 * Componente el cual tiene los botones para filtrar los datos de la tabla.
 * Se implantara dentro de un div del archivo App.jsx 
 * 
 * @author Alejandro De la Huerga.
 * @since 05/03/2026
 */

// Comentario prueba commit 




function filtros(){
    
    // Filtramos solo los admins
    const admins = usuarios.filter(usuario => usuario.tipo === "admin");

    const filtroAdmin=()=>{
        {DatosUsuarios.usuarios.map((usuario, index)=>(
            <tr key={index}>
                <td>
                    if({usuario.tipo === "admin"}){
                        
                    }
                </td>
            </tr>
        ))}
    }
}