import { LiaBasketballBallSolid, LiaKeySolid } from 'react-icons/lia';
import './Colaborador.css';
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Colaborador = (props) =>{

    const {id, nombre, equipo, puesto, foto,fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props

    //Condicion ? verdadero : falso

    return <div className='colaborador' >
        <IoIosCloseCircle className='eliminar' onClick={()=> eliminarColaborador(id)}/>
        <div className='encabezado' style={{backgroundColor:colorPrimario}} >
            {/* Con esto obtengo la imagen de mi github */}
            <img src= {foto}  alt={nombre} ></img>
        </div>

        <div className='info'>        
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav?  <AiFillHeart color='red' className='like' onClick={()=> like(id)} />: <AiOutlineHeart className='like'  onClick={()=>like(id)} />}   
           
            
        </div>

    </div>
}

export {Colaborador};

