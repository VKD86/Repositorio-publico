import React from 'react'
import "./TareasContador.css"

const TareasContador =({total, completas}) => {
  return (
<h2 className="TareasContador">Completaste {completas} de {total} tareas</h2>
  );
}

export {TareasContador};