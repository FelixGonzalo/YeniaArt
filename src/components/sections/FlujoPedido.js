import React from 'react'
import {Link} from "react-router-dom"
import './flujopedido.css'
import ichatusuarios from '../../img/icon/chatusuarios.svg'
import icatalogo from '../../img/icon/catalogo.svg'
import ientrega from '../../img/icon/paquete.svg'
import iWhatsapp from '../../img/icon/icon_whatsapp.svg'
import iFacebook from '../../img/icon/icon_facebook.svg'

const FlujoPedido = () => {
  return (
    <section className="flujopedido">
      <h2 className="subtitulo">Compra en simples pasos</h2>
      <div className="flujopedido-items">
        <div className="flujopedido-item">
          <img src={icatalogo} alt=""/>
          <p>1. Revisa productos en el catálogo</p>
          <Link to="/catalogo" className="flujopedido-boton"> 
            Ver catálogo
          </Link> 
        </div>
        <div className="flujopedido-item">
          <img src={ichatusuarios} alt=""/>
          <p>2. Contáctanos para hacer tu pedido</p>
          <div className="flujopedido-contactanos">
            <a href="https://api.whatsapp.com/send?phone=51957498221" target="_blank" rel="noreferrer">
              <img src={iWhatsapp} alt=""/>
            </a>
            <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer">
              <img src={iFacebook} alt=""/>
            </a>
          </div>
        </div>
        <div className="flujopedido-item">
          <img src={ientrega} alt=""/>
          <p>3. Recibe tu pedido</p>
          <p className="flujopedido-entrega">Entrega por Delivery o tiendas amigas</p>
        </div>
      </div>
    </section>
  )
}

export default FlujoPedido
