import React from 'react'
import './producto.css'
import iAgrandar from '../../img/icon/agrandar.svg'
import ProductoModal from './ProductoModal'

const Producto = (props) => {

  const [visualizar, setVisualizar] = React.useState(false)

  return (
    <div className="producto">
      {
        visualizar ? 
        <ProductoModal 
          cerrarModal={() => setVisualizar(false)}
          img= {props.img}
          imginfo= {props.imginfo}
          nombre= {props.nombre}
          rangoprecio= {props.rangoprecio}
        /> 
        : null
      }
      <div className="producto-item" onClick={() => setVisualizar(true)}>
        <div className="producto-info">
        <p className="producto-nombre">{props.nombre}</p>
        <p>{props.rangoprecio}</p>
        </div>
        <img src={props.img} alt={props.imginfo} className="producto-foto"/>
      </div>
    </div>
  );
}
 
export default Producto;