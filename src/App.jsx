/**
 * Aquí realizamos todas las exportaciones de los diferentes componentes.
 */

import Header from "./components/Header";
/**
 * Función principal la cual se va a mostrar en el index.html 
 * Esta función se va a importar en el archivo main.jsx y este mismo en el index.html
 * 
 * @param {*} props 
 * @returns 
 */
function App(props) {
    return(
        <Header></Header>  
    );

}

export default App;