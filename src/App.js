import React, {Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas'


function App() {

  // Agregar citas a local Storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){

    citasIniciales=[];
  }

  //Arreglo de citas con hook useState
  const [citas, setCitas] = useState(citasIniciales);

  //useEffect para realizar acciones cuando cambia un state
  useEffect( ()=> { 

    if(citasIniciales){

      localStorage.setItem('citas',JSON.stringify(citas))
    } else{

      localStorage.setItem('citas', JSON.stringify(citas))
    }

  });

  //Funcion que tome las citas actuales y agregue la nueva (los ... generan una copia de una arreglo)

  const crearCita = cita => setCitas([...citas , cita]);
  
  //Eliminar las citas en Citas

  const eliminarCitas = id => {

      const updateCitas= citas.filter(cita => cita.id !== id);
      setCitas(updateCitas);}

  // Modificar el titulo dependiendo las citas

  const titulo = citas.length === 0 ? 'Agrega una Cita': 'Administra tus citas';

  return (

    <Fragment>

    <h1>Administrador de Pacientes </h1>

    <div className="container">
      <div className="row">
        <div className="one-half column"><Formulario  crearCita= {crearCita}/></div>
        <div className="one-half column">
          <h2>{titulo}</h2>

          {citas.map(cita =>(<Citas 
            key={citas.id}
            cita={cita}
            eliminarCitas={eliminarCitas}
          />))}
          
        </div>
      </div>
    </div>
    </Fragment>

  )
}

export default App;
