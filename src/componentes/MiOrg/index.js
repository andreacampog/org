import { useState } from 'react';
import './MiOrg.css'


const MiOrg = (props) => {

    //Estado - hooks 
    //useState -> esta es la variable
    //useState() -> esta es la funcion que recibe como parametro el valor inicial

    // const [nombreDeLaVariable, funcionQueActualizaVariable]= useState('EstadoInicialDeLaVariable');

    //Quedaría asi por ejemplo: 

    //const[nombre,actualizarNombre] = useState('Andrea');

    //Puedo tener varios estados en el mismo componenete 

    //Ejemplo para false y true:
    //Lavariable se llama mostrar, la inicializo en true y la funcion que la va 
    //a modificar (donde haré el algoritmo)se llama actualizarMostrar

    // const [mostrar,actualizarMostrar]= useState(true);   

    
    //Con esta función detecto que se hizo click en el componente 
    //y defino un estado inicial para el
    
    
    // const manejarClick = ()=>{
    //     console.log('Mostrar/Ocultar elemento');
    //     //esta funcion, es como un switche true/false
    //     actualizarMostrar(!mostrar); //aqui asigno el valor negado de la variable mostrar
    //     //si hago actualizarMostrar(), es decir no le envio ningun estado
    //     //voy a obtener un undefined porque no le estoy dando un valor a la variable de estado
    // }

    console.log(props);
    // const [mostrar,actualizarMostrar]= useState(true);  

    // const manejarClick = ()=>{
    //     console.log('Mostrar/Ocultar elemento');   
    //     actualizarMostrar(!mostrar); 
    // }


    return (
        <section className="orgSection">
            <h3 className='title' >Mi Organización</h3>

            <img src="/img/add.png" alt = 'add' onClick={props.cambiarMostrar} />
        </section>
    );
}

export {MiOrg};