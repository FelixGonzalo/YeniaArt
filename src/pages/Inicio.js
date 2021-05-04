import React from 'react'
import Portada from '../components/Portadas/Portada'
import FlujoPedido from '../components/sections/FlujoPedido'
import QueOfrecemos from '../components/sections/QueOfrecemos'
import Ubicanos from '../components/sections/Ubicanos'

const Inicio = () => {
  return (
    <div>
      <Portada/>
      <QueOfrecemos/>
      <FlujoPedido/>
      <Ubicanos/>
    </div>
  )
}

export default Inicio


