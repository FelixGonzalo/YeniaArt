import React from 'react'
import Portada from '../components/Portadas/Portada'
import FlujoPedido from '../components/sections/FlujoPedido'
import QueOfrecemos from '../components/sections/QueOfrecemos'
import Ubicanos from '../components/sections/Ubicanos'

const Inicio = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Portada/>
      <QueOfrecemos/>
      <FlujoPedido/>
      <Ubicanos/>
    </main>
  )
}

export default Inicio


