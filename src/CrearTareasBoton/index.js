import React from 'react'
import "./CrearTareasBoton.css"

function CrearTareasBoton() {

  const onClickBoton = (msg) =>{
    alert (msg)
  }

  return (

<button className="CrearTareasBoton" onClick={() => onClickBoton ("Agregar tarea")}>
  +
  </button>
  )
}

export {CrearTareasBoton}