import React from 'react'
import './valor.css'
import {ImagesContext} from '../../context/ImagesProvider'

const Valor = (props) => {
  const {urlicon} = React.useContext(ImagesContext)
  return (
    <div className="valor">
      <p className="valor-nombre">{props.nombre}</p>
      <img src={urlicon + props.img} alt=""/>
      <p className="valor-descripcion">{props.descripcion}</p>
    </div>
  );
}
 
export default Valor;