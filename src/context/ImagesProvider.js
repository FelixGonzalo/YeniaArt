import React from 'react'

export const ImagesContext = React.createContext()

const ImagesProvider = (props) => {

  const urlimg = `${window.location.origin}/YeniaArt/imagenes/`;
  const urlicon = `${window.location.origin}/YeniaArt/iconos/`;
  const urlproductos = `${window.location.origin}/YeniaArt/imagenes/productos/`;
  const urltiendas = `${window.location.origin}/YeniaArt/imagenes/tiendas/`;

  return (
    <ImagesContext.Provider value={{urlimg, urlicon, urlproductos,urltiendas}}>
      {props.children}
    </ImagesContext.Provider>
  )
}

export default ImagesProvider
