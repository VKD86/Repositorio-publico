import React from 'react'
import "./TareasBuscador.css"

const TareasBuscador = ({valorBuscador,setvalorBuscador})=> {

  const onBuscadorCambio = (event) =>{
    console.log (event.target.value)
    setvalorBuscador(event.target.value)
  }

  return [
    <input
      className="TareasBuscador"
      placeholder='Buscar ITEM'
      value={valorBuscador}
      onChange={onBuscadorCambio} />,  
    ];
}

export {TareasBuscador }