import React from 'react';
import './style/icono.css';

export default function Clima({resultado}){
	console.log(resultado);
	//extraer los valores
	const {name, main, weather} = resultado;

if(!name) return null;

	const icono = "http://openweathermap.org/img/w/"+ weather[0].icon +".png";
	const kelvin = 273.15;

		return (
				<div className="card-panel col s12 hoverable">
					<div className="texto"> 
							<div className="Titulo"><h3 className="TituloCiudad">{name}</h3></div>

						<p className="temperatura">
							{parseInt(main.temp - kelvin, 10)}<span>&#x2103;</span>

						</p>
						
						<p className="DatosTemp">Máxima: {parseInt(main.temp_max - kelvin, 10)}<span>&#x2103;</span></p>
						<p className="DatosTemp">Mínima: {parseInt(main.temp_min - kelvin, 10)}<span>&#x2103;</span></p>
						<p className="DatosTemp">Humedad: {main.humidity}%</p>
						
						<p className="DatosTemp">Descripción: {weather[0].main}</p>
						<div className="center-align"><img src={icono} className="circle responsive-img icono" alt="Icono"/></div>

					</div>
				</div>

			)


}