import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';
import './App.css';

function App() {
  

  //State principal
  const [ciudad,guardarCiudad] = useState('');
  const [pais, guardarPais]= useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

useEffect(()=>{
  //prevenir la ejecucion
  if(ciudad === '') return;

  const consultarApi= async ()=>{
  const appId='c610f12c510aa776ba39127945143f84';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

  //consultar la URL
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  guardarResultado(resultado);
  

  };


  consultarApi();

  }, [ciudad, pais]);

  const datosConsulta = datos =>{
      //validar que ambos campos esten
      if(datos.ciudad === '' || datos.pais === ''){
        //un error
        guardarError(true);
        return;
      }
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
    console.log(ciudad);
    console.log(pais);
  };

 

let componente;
 if(error){
   //Hay error
   componente = <Error mensaje="Rellenar los campos" />
 }else if(resultado.cod ==="404"){
     componente = <Error mensaje="La ciudad no se encuentra en el pais seleccionado" />



 }else{
   //Mostrar el clima
   componente = <Clima resultado ={resultado}/>;
 }


  return (
    <div className="App">
     <Header titulo="BlackPeople-Clima"/>
     
     <div className="contenedor-form">
       <div className="container">
         <div className="row">
           <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta}/>
             </div>
            <div className="col s12 m6">{componente}</div>
         </div>
       </div>
     </div>
     
    </div>
  );
}

export default App;
