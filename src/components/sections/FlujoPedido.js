import React from 'react'
import './flujopedido.css'
import ichatusuarios from '../../img/icon/chatusuarios.svg'
import icatalogo from '../../img/icon/catalogo.svg'
import ientrega from '../../img/icon/paquete.svg'

const FlujoPedido = () => {
  return (
    <section className="flujopedido">
      <h2 className="subtitulo">Compra en simples pasos</h2>
      <div className="flujopedido-items">
        <div className="flujopedido-item">
          <img src={icatalogo} alt=""/>
          <p>1. Ver productos en el catálogo</p>
        </div>
        <div className="flujopedido-item">
          <img src={ichatusuarios} alt=""/>
          <p>2. Contáctanos para hacer tu pedido</p>
        </div>
        <div className="flujopedido-item">
          <img src={ientrega} alt=""/>
          <p>3. Espera la elaboración y entrega</p>
        </div>
      </div>
    </section>
  )
}

export default FlujoPedido
