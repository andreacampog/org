import './Equipo.css'
import { Colaborador} from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo =(props) => { 

    //Destructuracion saco los valores que vienen del parametro props
    
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const { id,titulo, colorPrimario, colorSecundario } = props.datos;
    
    

    //es igual que decir:

    //const colorSecundario = props.datos.colorSecundario;
    //const colorPrimario = props.datos.colorPrimario;   

    //formas de dar estilo 
    const obj = {backgroundColor:hexToRgba(colorPrimario, 0.6)}; 

    const estiloTitulo ={borderColor: colorPrimario}; 

    //la otra forma es hacerlo en linea: 
    //style={{backgroundColor: colorSecundario}}>

    return <> 
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type='color'
                    className='input-color'
                    defaultValue ={colorPrimario}
                    onChange={(evento)=> {
                        //console.log(evento.target.value);
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores" >             
                    {/* creo el componente colaborador por cada colaborador en el array */}
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario = {colorPrimario}  
                            eliminarColaborador = {eliminarColaborador}
                            like = {like}
                        />)
                    }               
                                                
                </div>
            </section>
        }</>       
}     
    
export {Equipo}