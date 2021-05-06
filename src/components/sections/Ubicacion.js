import React from 'react'
import './ubicacion.css'
import {ImagesContext} from '../../context/ImagesProvider'

const Ubicacion = (props) => {
  const {urltiendas} = React.useContext(ImagesContext)
  return (
    <div className="ubicacion">
     <div className="ubicacion-info">
        <p className="ubicacion-info-nombre">
          {props.nombre}
          <span className="ubicacion-info-ciudad">{props.ciudad}</span>
          <span className="ubicacion-info-referencia">{props.referencia}</span>
        </p>
        <p className="ubicacion-info-text">
          {props.info}
        </p>
      </div>
      <img src={urltiendas+props.foto} alt="ubicacion yeniaart" className="ubicacion-foto"/>
      <iframe title="tienda amiga" className="ubicacion-mapa" src={props.googlemap}  loading="lazy"></iframe>
    </div>
  );
}
 
export default Ubicacion;