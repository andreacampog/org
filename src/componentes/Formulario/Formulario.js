import { useState } from 'react'
import './Formulario.css'
import { Campo } from '../Campo'
import { ListaOpciones } from '../ListaOpciones'
import { Boton } from '../Boton'
//otra forma de hacerlo con arrow functions

const Formulario = (props)=>{

    const [nombre,actualizarNombre]= useState('');
    const [puesto,actualizarPuesto]= useState('');
    const [foto,actualizarFoto]= useState('');
    const [equipo,actualizarEquipo] = useState('');

    const[titulo,actualizarTitulo] = useState('');
    const[color,actualizarColor] = useState('');

    //destructuramos

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) =>{
        //console.log('Manejar el envio',e);
        e.preventDefault();

        let datosAEnviar ={
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        // console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);  //tomo los datos del formulario y los llevo a APP.js


        //TIP el objeto funciona asi tambien 
        // let datosAEnviar ={
        //     nombre,
        //     puesto,
        //     foto
        // }

    }
    const manejarNuevoEquipo= (e) =>{      
        e.preventDefault();
        //console.log(color, titulo);
        crearEquipo(
            {   titulo: titulo,                 
                colorPrimario:color,                
            });

    }

    return <section className='formulario' >
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo titulo = 'Nombre' 
                placeholder ='Ingresar nombre'
                required 
                valor={nombre} 
                actualizarValor= {actualizarNombre} 
            />     
            
            <Campo titulo='Puesto'
                placeholder ='Ingresar puesto' 
                required 
                valor={puesto} 
                actualizarValor= {actualizarPuesto} 
                
            />

            <Campo titulo='Foto'
                placeholder ='Ingresar enlace de foto' 
                required 
                valor={foto} 
                actualizarValor= {actualizarFoto}
            /> 

            <ListaOpciones 
                valor= {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos={props.equipos}                          
            />
             
            <Boton>
                Crear
            </Boton>            
        </form>      
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el equipo.</h2>

            <Campo titulo = 'Titulo' 
                placeholder ='Ingresar titulo'
                required 
                valor={titulo} 
                actualizarValor= {actualizarTitulo} 
            />     
            
            <Campo titulo='Color'                
                placeholder ='Ingresar color en Hex' 
                required 
                valor= {color} 
                actualizarValor= {actualizarColor}    
                type = 'color'             
            />

            <Boton>
                Registrar Equipo
            </Boton>              
        </form>
    </section>
}

export {Formulario}
