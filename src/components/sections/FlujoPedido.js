import React from 'react'
import {Link} from "react-router-dom"
import './flujopedido.css'

const FlujoPedido = () => {
  return (
    <section className="flujopedido">
      <h2 className="subtitulo">Compra en simples pasos</h2>
      <div className="flujopedido-items">
        <div className="flujopedido-item">
          <img src={window.location.origin + '/iconos/catalogo.svg'} alt=""/>
          <p>1. Revisa productos en el catálogo</p>
          <Link to="/catalogo" className="flujopedido-boton"> 
            Ver catálogo
          </Link> 
        </div>
        <div className="flujopedido-item">
          <img src={window.location.origin + '/iconos/chatusuarios.svg'} alt=""/>
          <p>2. Contáctanos para hacer tu pedido</p>
          <div className="flujopedido-contactanos">
            <a href="https://api.whatsapp.com/send?phone=51957498221" target="_blank" rel="noreferrer">
              <img src={window.location.origin + '/iconos/icon_whatsapp.svg'} alt=""/>
            </a>
            <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer">
              <img src={window.location.origin + '/iconos/icon_facebook.svg'} alt=""/>
            </a>
          </div>
        </div>
        <div className="flujopedido-item">
          <img src={window.location.origin + '/iconos/entrega.svg'} alt=""/>
          <p>3. Recibe tu pedido</p>
          <p className="flujopedido-entrega">Entrega por Delivery o tiendas amigas</p>
        </div>
      </div>
    </section>
  )
}

export default FlujoPedido
