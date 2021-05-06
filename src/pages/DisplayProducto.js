import React from 'react'
import './displayProducto.css'
import { useParams } from 'react-router'
import {withRouter} from 'react-router-dom'
import { nanoid } from 'nanoid'

import {ProductosContext} from '../context/ProductosProvider'

const DisplayProducto = (props) => {
  const {categoria, item} = useParams()
  const {getProducto, productosSugeridos} = React.useContext(ProductosContext)
  const [producto, setProducto] = React.useState(null)


  React.useEffect(() => {
    window.scrollTo(0, 0)
    setProducto(getProducto(categoria,item))
  }, [])

  return (
    <main className="displayProducto">
      {
        producto ? (
          <>
            <div>
              <div className="displayProducto-header">
                <span>Pedido por WhatsApp  👉 </span>
                <div>
                  <a href={'https://api.whatsapp.com/send?phone=51957498221&text=Hola, quisiera realizar un pedido: ' + window.location} target="_blank" rel="noreferrer" className="displayProducto-contacto">
                    <img src={window.location.origin + '/iconos/icon_whatsapp.svg'} alt=""/>
                  </a>
                  <span  className="displayProducto-contacto" onClick={() => props.history.push('/catalogo/'+categoria)}>
                    <img src={window.location.origin + '/iconos/regresar.svg'} alt=""/>
                  </span>
                </div>
              </div>
              <img src={window.location.origin + '/imagenes/productos/' + producto.img} alt="" className="displayProducto-img"/>
            </div> 
            <div className="displayProducto-info">
              <h2 className="displayProducto-info-nombre">{producto.nombre} <span className="displayProducto-info-precio">{producto.precio}</span></h2>
              <p className="displayProducto-info-descripcion">{producto.descripcion}</p>
              <p className="displayProducto-info-nota">Si desea personalizado el precio puede variar acorde al trabajo, tiempo de entrega y contenido adicional.</p>
              <h3 className="displayProducto-sugerencias-titulo">Te puede interesar</h3>
              <div className="displayProducto-sugerencias">
                {
                  productosSugeridos.map((product) => (
                    <img
                      key= {nanoid()}
                      src={window.location.origin + '/imagenes/productos/' + product.img} 
                      alt="" 
                      className="displayProducto-sugerencias-img"
                      onClick={() => window.location.href = `${window.location.origin}/catalogo/${product.slug}/${product.img.split('.')[0]}`}
                    />
                  ))
                }
              </div>
            </div>
          </>
        ) : null
      }
    </main>
  )
}

export default withRouter(DisplayProducto)
