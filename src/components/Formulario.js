import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    // Creamos el state para citas
    const [cita, setCita] = useState({

        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    // Creamos state de error 
    const [error , setError] = useState(false);

    // funcion que se activa cuando el usuario interactua con los campos del formulario
     const setState = e => {

        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })}

     // Extraer los valores de cita
      const {mascota,propietario,fecha,hora,sintomas} = cita;

      const submitCita = e =>{

        e.preventDefault();

        //Validar 
        // trim extrae los espacios en blanco del principio y final
        if(mascota.trim() === '' || propietario.trim() ==='' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){

            setError(true);
            return;
        }else{
            setError(false);
        }

        //Asignar ID
        cita.id=uuidv4();

        //Crear la cita

        crearCita(cita);

        //Reiniciar el form

        setCita ({

            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

      }

    return ( 
        <Fragment>
            <h1>Crear Cita</h1>

           
            { error  ? <p className='alerta-error'>Debe completar todos los campos</p> : null}

            <form onSubmit = {submitCita}>
                
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    //ejecuta onchange cuando edita el formulario
                    onChange={setState}
                    //para formatear formulario
                    value={mascota}

                />

                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
                    onChange={setState}
                    value={propietario}
                />

                <input
                    type="date"
                    name="fecha"
                    className="u-full-width" 
                    onChange={setState}
                    value={fecha}
                />

                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={setState}
                    value={hora}
                />

                
                    <textarea
                    name="sintomas"
                    placeholder="Sintomas"
                    className="u-full-width"
                    onChange={setState}
                    value={sintomas}
                    ></textarea>

                    <button

                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar cita</button>
                

                    


            </form>
            
            
            
            
            
            
            
            </Fragment>

        
     );
}
 
export default Formulario;