import React from 'react';

const Citas = ({cita, eliminarCitas}) => {

    const {mascota,propietario,fecha,hora,sintomas} = cita;
    
    
    return (

        <div className="cita">
            
            <p>Mascota:<span>{mascota}</span> </p>
            <p>Propietario:<span>{propietario}</span> </p>
            <p>Fecha:<span>{fecha}</span> </p>
            <p>Hora:<span>{hora}</span> </p>
            <p>Sintomas:<span>{sintomas}</span> </p>

            <button 
            
            className="button eliminar u-full-width"
            onClick={() => eliminarCitas(cita.id)}>Eliminar &times;</button>
        
        </div>

    )}
 
export default Citas;