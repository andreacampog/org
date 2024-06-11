import { useState } from 'react';
import './Campo.css'

const Campo= (props) => {
    //En este objeto props, vienen todas las llaves
    //Para este caso titulo y placeholder
    //Podria escribir directamente  (titulo, placeholder)
    //asi abajo no debo usar siempre props.titulo, props.placeholder
       
    console.log("Datos",props);
    
    const placeholderModificado = `${props.placeholder}...`

    //Destructuración

    const {type = 'text'} = props //en caso de que type sea indefinido
    //le asignamos tipo text
    
    //console.log(type);

    const manejarCambio=(e)=>{
        console.log('Cambio',e.target.value);
        props.actualizarValor(e.target.value);
    }
    return (
        <div className={`campo campo-${type}`} >
            <label>{props.titulo}</label>
            <input  
                placeholder={placeholderModificado}
                required ={props.required} 
                value={props.valor}
                onChange={manejarCambio}   
                type = {type}
            />
        </div>
    );    
}
export{Campo} 