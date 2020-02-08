import React, {useState} from 'react';

export default function Formulario({datosConsulta}){

	
	//state del Componente
	const [busqueda,guardarBusqueda]=useState({
		ciudad:'',
		pais:''

	});


	const handleChange = e =>{
		//cambiar el state

		
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value

		});


	}

	const consultarClima = e =>{
		e.preventDefault();
		//pasamos la busqueda hacia la app principal
		datosConsulta(busqueda);
	}

	return(
			<form onSubmit={consultarClima}>
				
				<div className="input-field col s12 hoverable">

					<input type="text" name="ciudad" id="ciudad" onChange={handleChange} className="validate"/>
					<label htmlFor="ciudad">Ciudad:</label>
				</div>

				<div className="input-field col s12 hoverable">
					<select onChange={handleChange} name="pais">
						<option value="">Selecciona un pais</option>
						<option value="AR">Argentina</option>
						<option value="BO">Bolivia</option>
						<option value="BR">Brasil</option>
						<option value="CO">Colombia</option>
						<option value="CL">Chile</option>
						
						<option value="PY">Paraguay</option>
						<option value="PE">Peru</option>
						<option value="UY">Uruguay</option>
						<option value="VE">Venezuela</option>
						
					</select>

				</div>
				<div className="input-field col s12">
					<button type="submit" className="waves-effect waves-ligth btn-large btn-block accent-4 boton" name="action"> <i className="material-icons left">cloud</i>Buscar Clima</button>

				</div>
			</form>
		);


}