import React from 'react'
import './productoModal.css' 

function ProductoModal(props) {
  const cerrarProductoModal = (e) => {
    if (e.target.id === 'productoModal-container') {
      props.cerrarModal()
    }
  }

  return (
    <div 
      id="productoModal-container"
      className="productoModal-container"
      onClick={(e)=> cerrarProductoModal(e)}
    >
      <div className="productoModal">
        <p className="producto-nombre">{props.nombre}</p>
        <p>{props.rangoprecio}</p>
        <div className="productoModal-foto-container">
          <img src={props.img} alt={props.imginfo} className="productoModal-foto"/>
        </div>
      </div>
    </div>
  )
}

export default ProductoModal;