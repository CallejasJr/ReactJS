import React, {Fragment, useState}from 'react';

const Formulario = ({crearCita}) => {
    //Crear State de Citas

    const [cita, setCita] = useState(
        {
            mascota:'',
            propietario:'',
            fecha: '',
            hora: '',
            sintomas: ''
        }
    );

    const [error, setError] = useState(false);

    //Funcion que se ejecuta cada que el usuario escribe en un input
    let id = 0;
    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim()==='' || fecha.trim()==='' || hora.trim() === '' || sintomas.trim()===''){
            setError(true)
            return;
        }
        setError(false)
        // Asignar id
        cita.id = id;
        id = id+1;
        //Crear cita
        crearCita(cita);
        // Reiniciar form
        setCita({
            mascota:'',
            propietario:'',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea name="sintomas" 
                          className="u-full-width"
                          onChange={actualizarState}
                          value={sintomas}>
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary">
                Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;