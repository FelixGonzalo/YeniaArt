import React from 'react'
import './categoriaItem.css'
import {withRouter} from 'react-router-dom'

const CategoriaItem = (props) => {

  return (
    <div className="categoriaItem">
      <div className="categoriaItem-item" onClick={() => props.history.push('/catalogo/' + props.slug)}>
        <div className="categoriaItem-info">
        <p className="categoriaItem-nombre">{props.nombre}</p>
        <p className="categoriaItem-rangoprecio">{props.rangoprecio}</p>
        <p className="categoriaItem-descripcion">{props.descripcion}</p>
        </div>
        <img src={props.img} alt={props.imginfo} className="categoriaItem-foto"/>
      </div>
    </div>
  );
}
 
export default withRouter(CategoriaItem);