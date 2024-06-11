//Paso 1. Creo mi primer componente
//En el return devuelvo lo que conocemos como un concepto de HTML
import './Header.css'
function Header(){
    return (
        
    <header className="header" >
        <img src='./img/header.png' alt="Org" />
    </header>
        
    );
}

export { Header};