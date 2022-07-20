import React from 'react'
import {TareasContador} from "../TareasContador"
import {TareasBuscador} from "../TareasBuscador"
import {TareasLista} from "../TareasLista"
import {TareasItem} from "../TareasItem"
import {CrearTareasBoton} from "../CrearTareasBoton"
/* 
const defaultTareas = [
  {texto: "Estudiar React", completado: true},
  {texto: "Juntarme con mi Grupo", completado: false},
  {texto: "Pensar nuestro Proyecto", completado: true},
  {texto: "Realizar repositorio", completado: true},

]; */

const App = () => {

  const localStorageTareas = localStorage.getItem("TAREAS_V1");
  
let parsearTareas;

if (!localStorageTareas){
localStorage.setItem("TAREAS_V1",JSON.stringify ([]));
parsearTareas =[];
}else{
  parsearTareas= JSON.parse(localStorageTareas)
}

  const [tareas , setTareas]  = React.useState(parsearTareas);
  const [valorBuscador,setvalorBuscador] = React.useState("");
  /* creamos un estado con useState guardado en la variable valorBuscador 
Ademas tenemos una funcion para actualizar este valor se llama  setvalorBuscador */
 
const tareasCompletas = tareas.filter(tareas =>tareas.completado).length;
const totalTareas = tareas.length;
 
let buscarTareas = [];

if (valorBuscador.length<=0){
  buscarTareas = tareas;
} else {
 
  buscarTareas = tareas.filter (tareas=>{
    const tareasTexto = tareas.texto.toLowerCase();
    const buscadorTexto = valorBuscador.toLowerCase();
   return tareasTexto.includes(buscadorTexto)
  });
}
 

const guardarTareas = (nuevasTareas)=> {
const tareasStringuificadas = JSON.stringify(nuevasTareas);
localStorage.setItem("TAREAS_V1",tareasStringuificadas);
setTareas (nuevasTareas)

};



const tareaCompleta =(texto)=>{
const tareasIndex = tareas.findIndex (tarea => tarea.texto ===texto);
const nuevasTareas = [...tareas];
nuevasTareas[tareasIndex].completado = true;
guardarTareas(nuevasTareas);
/* tareas[tareasIndex]= {
  texto:tareas[tareasIndex].texto,
  completado:true,
} */
};

const tareaBorrada =(texto)=>{
  const tareasIndex = tareas.findIndex (tarea => tarea.texto ===texto);
  const nuevasTareas = [...tareas];
  nuevasTareas.splice(tareasIndex, 1)
  guardarTareas(nuevasTareas);
  /* tareas[tareasIndex]= {
    texto:tareas[tareasIndex].texto,
    completado:true,
  } */
  };

 return (
<>
<TareasContador
total = {totalTareas}
completas = {tareasCompletas}
/>
<TareasBuscador
valorBuscador ={valorBuscador}
setvalorBuscador={setvalorBuscador}
/>

<TareasLista>
{
buscarTareas.map(tareas =>(
<TareasItem
key= {tareas.texto}
text= {tareas.texto}
completado = {tareas.completado}
ontareaCompleta ={()=>tareaCompleta(tareas.texto)}
ontareaBorrada ={()=>tareaBorrada(tareas.texto)}
/>

))}

</TareasLista>

<CrearTareasBoton/>
</>

  );

}

export {App}