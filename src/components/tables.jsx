import { useState } from "react";
import UsuariosData from "../assets/Datos.json";

/**
 * Elemento con los datos de los usuarios que se imprimira en el main.
 * 
 * @returns Tabla con los datos de todos los usuarios.
 * @author Alejandro De la Huerga 
 * @since 05/03/2026
 */

function TablaUsuarios() {
  // State que guarda los usuarios a mostrar
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(UsuariosData.usuarios);

  // Función para filtrar solo admins
  const filtrarAdmins = () => {
    const admins = UsuariosData.usuarios.filter(usuario => usuario.tipo === "admin");
    setUsuariosFiltrados(admins);
  };

  const filtrarUsuariosNormales = () =>{
    const users =UsuariosData.usuarios.filter(usuario => usuario.tipo === "normal");
    setUsuariosFiltrados(users);
  };

  // Función para mostrar todos
  const mostrarTodos = () => {
    setUsuariosFiltrados(UsuariosData.usuarios);
  };

  return (
    <div className="container my-5 text-center">
      {/* Botones de filtro */}
      <div className="mb-4">
        <button className="btn btn-primary btn-lg me-3" onClick={mostrarTodos}>
          Todos
        </button>
        <button className="btn btn-primary btn-lg me-3" onClick={filtrarAdmins}>
          Administradores
        </button>
        <button className="btn btn-primary btn-lg" onClick={filtrarUsuariosNormales}>
          Usuarios
        </button>
        
      </div>

      {/* Tabla */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped text-center align-middle">
          <thead className="table-info fs-5">
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Password</th>
              <th>Permisos / Seguidores</th>
            </tr>
          </thead>
          <tbody className="fs-5">
            {usuariosFiltrados.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.tipo}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.password}</td>
                <td>
                  {usuario.tipo === "admin" ? (
                    <ul className="list-unstyled mb-0">
                      <li>Eliminar: {usuario.permisos.eliminar ? "Sí" : "No"}</li>
                      <li>Consultar: {usuario.permisos.consultar ? "Sí" : "No"}</li>
                      <li>Editar: {usuario.permisos.editar ? "Sí" : "No"}</li>
                    </ul>
                  ) : usuario.seguidores?.length > 0 ? (
                    <ul className="list-unstyled mb-0">
                      {usuario.seguidores.map((seguidor, idx) => (
                        <li key={idx}>{seguidor}</li>
                      ))}
                    </ul>
                  ) : (
                    <em>No tiene seguidores</em>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaUsuarios;