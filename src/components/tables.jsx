import UsuariosData from "../assets/Datos.json";

/**
 * Elemento con los datos de los usuarios que se imprimira en el main.
 * 
 * @returns Tabla con los datos de todos los usuarios.
 * @author Alejandro De la Huerga 
 * @since 05/03/2026
 */




function TablaUsuarios(){
    return (
      <table className="table text-center">
      <thead className="table-info">
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Password</th>
          <th>Permisos / Seguidores</th>
        </tr>
      </thead>
      <tbody>
        {UsuariosData.usuarios.map((usuario, index) => (
          <tr key={index}>
            <td>{usuario.tipo}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.password}</td>
            <td>
              {usuario.tipo === "admin" ? (
                // Mostrar permisos para admins
                <ul className="list-unstyled mb-0">
                  <li>Eliminar: {usuario.permisos.eliminar ? "Sí" : "No"}</li>
                  <li>Consultar: {usuario.permisos.consultar ? "Sí" : "No"}</li>
                  <li>Editar: {usuario.permisos.editar ? "Sí" : "No"}</li>
                </ul>
              ) : (
                // Mostrar seguidores para usuarios normales
                usuario.seguidores.length > 0 ? (
                  <ul className="list-unstyled mb-0">
                    {usuario.seguidores.map((seguidor, idx) => (
                      <li key={idx}>{seguidor}</li>
                    ))}
                  </ul>
                ) : (
                  <em>No tiene seguidores</em>
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}

export default TablaUsuarios;