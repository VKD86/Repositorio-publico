import React from 'react';
import "./TareasItem.css"



function TareasItem(props) {

  return (
    <li className="TareasItem">
      <span className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}
      onClick={props.ontareaCompleta}
      >
        √
      </span>
      <p className={`TareasItem-p ${props.completado && 'TareasItem-p--completado'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
           onClick={props.ontareaBorrada}
      >
        X
      </span>
    </li>
  );
}
export { TareasItem };