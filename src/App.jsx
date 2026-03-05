/**
 * Aquí realizamos todas las exportaciones de los diferentes componentes.
 */


import Header from "./components/Header";
import TablaUsuarios from "./components/tables";

/**
 * Función principal la cual se va a mostrar en el index.html 
 * Esta función se va a importar en el archivo main.jsx y este mismo en el index.html
 * 
 * @param {*} props 
 * @returns 
 */

function App(props) {
    return(
        <div className="App">
            <Header></Header>
            <div className="filtros">
                
            </div>
            <main className="container-fluid d-flex justify-content-center align-items-center">
                <TablaUsuarios />
            </main>
        </div>
    );
}

export default App;