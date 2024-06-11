import { useLayoutEffect, useState } from 'react';
import { v4 as uuid} from 'uuid';
import { Header } from './componentes/Header/Header';
import { Formulario } from './componentes/Formulario/Formulario';
import { MiOrg } from './componentes/MiOrg';
import { Equipo } from './componentes/Equipo';
import { Footer } from './componentes/Footer';

import './App.css';
import { FaLaptopHouse } from 'react-icons/fa';

function App() {

  const [mostrarFormulario,actualizarMostrar]= useState(false);
  // const [colaboradores,actualizarColaboradores]= useState([]); //inicializo con un arreglo vacio 

  //Con esta linea el estado inicial son varios perfiles
  const [colaboradores,actualizarColaboradores]= useState([
    { 
      id: uuid(),
      equipo: 'Front End',
      nombre: 'Andrea Campo',
      foto: 'https://github.com/andreacampog.png',
      puesto: 'Estudiante',
      fav: true
    },    
    { id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    { id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    { id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false

    },
    { id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    { id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  
  ])

  //Estado para actualizar Equipos
  const [equipos, actualizarEquipos] = useState([  //Lista de Equipos 
    { 
      id: uuid(),
      titulo: 'Programación', 
      colorPrimario : '#57C278',
      colorSecundario : '#D9f7E9'
    },
    { 
      id: uuid(),
      titulo: 'Front End', 
      colorPrimario : '#82cffa',
      colorSecundario : '#e8f8ff'
    },
    { 
      id: uuid(),
      titulo: 'Data Science', 
      colorPrimario : '#a6d157',
      colorSecundario : '#f0f8e2'
    },
    { 
      id: uuid(),
      titulo: 'Devops', 
      colorPrimario : '#e06869',
      colorSecundario : '#fde7e8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario : '#db6dbf',
      colorSecundario : '#fae9f5'
    },
    { 
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario : '#ffba05',
      colorSecundario :'#fff5d9'
    },
    { 
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario : '#ff8a29',
      colorSecundario:'#ffdeff'
    }

  ]);

  //console.log(uuid()); //imprime el id unico que crea la libreria


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador)=>{
    console.log('Nuevo colaborador', colaborador);
    //spread operator [...copiaDelArray, elementoParaAgregar]
    
    actualizarColaboradores([...colaboradores, colaborador]);//copio el array colaboradores y le agrego el nuevo colaborador

  }

  //Eliminar Colaborador 

  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id);   
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id ) 
    console.log(nuevosColaboradores);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipos

  const actualizarColor = (color,id) =>{
    console.log('Actualizar: ', color, id);

    const equiposActualizados = equipos.map( (equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color;                
      }
      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    //copio equipos y agrego un nuevo objeto, los datos de nuevo equipo
    //y le agregamos el id con la funcion uuid()
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }

  const like = (id)=>{
    console.log('like', id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=> {
      if(colaborador.id === id){
        colaborador.fav  =!colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
        equipos = {equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo= {crearEquipo}
        />
      }    
      
      <MiOrg cambiarMostrar= {cambiarMostrar} />      
      
      {
        equipos.map((equipo) => <Equipo 
          datos= {equipo}
          key={equipo.titulo} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo=== equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor= {actualizarColor}
          like={like}
          /> )
          
      }

      <Footer />
    </div>

  );
}

export default App;



  //Usamos el operador ternario para mostrar o no 
  //de la siguiente forma
  //si: si muestro <Formulario />, si: no muestro un <div></div> vacio
  //{mostrarFormulario === true ? <Formulario /> : <div></div>}

  // ESta linea    { mostrarFormulario === true ? <Formulario /> : <div></div> } 
  //puede quedar asi mostrarFormulario ? <Formulario /> : <></> } 


  //OTRA FORMA DE HACERLO 
  //condicion && seMuestra Significa: si la condicion se cumple muestralo
  //aplicado en el ejemplo anterior 
  //{mostrarFormulario && <Formulario /> }