import './ListaOpciones.css'

const ListaOpciones = (props) =>{    

    // metodo map -> arreglo.map((equipo,index) => {
    //     return <option></option>
    // })
    //por ser una arreglo usando un map va asi (equipo, index)

    const manejarCambio = (e) => {
        console.log(e.target.value);
        props.actualizarEquipo(e.target.value) //con esta funcion le digo a App que cambio el equipo
    }

    return <div className='lista-opciones' >
            <label>Equipos</label>
            
            <select 
                value={props.valor} 
                onChange={manejarCambio}>
                
                <option  
                    value={props.actualizarEquipo} 
                    disabled 
                    defaultValue = '' 
                    hidden //esta propiedad oculta el 'Seleccione equipo de la lista'
                    >Seleccione un equipo: 

                </option>

                {props.equipos.map((equipo, index) =>{
                    return <option key={index} value={equipo}>{equipo}</option>
                })}               

                {/* Si logro poner todo en una sola linea no necesito el return 
                {equipos.map((equipo, index) =>{<option key={index} >{equipo}</option>})}   */}

            </select>
        </div>

       
}

export {ListaOpciones};