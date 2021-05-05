import React from 'react'
import './displayProducto.css'
import { useParams } from 'react-router'

const DisplayProducto = () => {

  const {item} = useParams()

  return (
    <main className="displayProducto">
      <div className="displayProducto-info">
        <span>Pedido por WhatsApp  👉 </span>
        <a href={'https://api.whatsapp.com/send?phone=51957498221&text=Hola, quisiera realizar un pedido: ' + window.location} target="_blank" rel="noreferrer" className="displayProducto-contacto">
          <img src={window.location.origin + '/iconos/icon_whatsapp.svg'} alt=""/>
        </a>
      </div>
      <img src={window.location.origin + '/imagenes/productos/' + item + '.jpg'} alt="" className="displayProducto-img"/>
    </main>
  )
}

export default DisplayProducto
