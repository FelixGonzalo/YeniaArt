import React from 'react'

export const ProductosContext = React.createContext()

const ProductosProvider = (props) => {

  const categorias = [
    {
      id: 1,
      img: 'paqueteregalo1.jpg',
      imginfo: "paquetes de regalo personalizado",
      nombre: "Paquetes de regalo",
      rangoprecio: "desde s/30.00",
      descripcion: "Con cajas, bolsas, tazas, tarjetas, marcos, peluches, dulces, globos, etc.",
      items: [
        'paqueteregalo1.jpg',
        'paqueteregalo2.jpg',
        'paqueteregalo3.jpg',
        'paqueteregalo4.jpg',
        'paqueteregalo1.jpg',
        'paqueteregalo2.jpg',
        'paqueteregalo3.jpg',
        'paqueteregalo4.jpg',
        'paqueteregalo1.jpg',
        'paqueteregalo2.jpg',
        'paqueteregalo3.jpg',
        'paqueteregalo4.jpg',
        'paqueteregalo1.jpg',
        'paqueteregalo2.jpg',
        'paqueteregalo3.jpg',
        'paqueteregalo4.jpg',
      ]
    },
    {
      id: 2,
      img: 'caja1.jpg',
      imginfo: "cajas personalizadas",
      nombre: "Cajas",
      rangoprecio: "desde s/20.00",
      descripcion: "Incluye tu texto, dibujos y diseño (Lettering). Tu te encargas de llenarlo !!",
      items: [
        'caja1.jpg',
        'caja2.jpg',
        'caja1.jpg'
      ]
    },
    {
      id: 3,
      img: 'bolsa1.jpg',
      imginfo: "Bolsas personalizadas",
      nombre: "Bolsas",
      rangoprecio: "desde s/11.00",
      descripcion: "Incluye tu texto (Lettering). Entrega tu regalo con estilo !!",
      items: [
        'bolsa1.jpg',
        'bolsa1.jpg',
        'bolsa1.jpg'
      ]
    },
    {
      id: 4,
      img: 'taza1.jpg',
      imginfo: "Tazas personalizadas",
      nombre: "Tazas",
      rangoprecio: "desde s/20.00",
      descripcion: "Incluye tus fotos, texto y diseño.",
      items: [
        'taza1.jpg',
        'taza1.jpg',
        'taza1.jpg'
      ]
    },
    {
      id: 5,
      img: 'tarjeta1.jpg',
      imginfo: "Tarjetas personalizadas",
      nombre: "Tarjetas",
      rangoprecio: "desde s/10.00",
      descripcion: "Incluye tu texto, dibujos y diseño (Lettering). Acompaña tus regalos con un mensaje !!",
      items: [
        'tarjeta1.jpg',
        'tarjeta1.jpg',
        'tarjeta1.jpg'
      ]
    },
    {
      id: 6,
      img: 'marco1.jpg',
      imginfo: "Marcos personalizados",
      nombre: "Marcos",
      rangoprecio: "desde s/15.00",
      descripcion: "Incluye impresión de fotos, texto, dibujos y diseño (Lettering).",
      items: [
        'marco1.jpg',
        'marco2.jpg',
        'marco3.jpg'
      ]
    },
  ]

  const getCategoria = (categoria = '') => {
    switch (categoria) {
      case 'paquetesregalo':
        return categorias[0]
      case 'cajas':
        return categorias[1]
      case 'bolsas':
        return categorias[2]
      case 'tazas':
        return categorias[3]
      case 'tarjetas':
        return categorias[4]
      case 'marcos':
        return categorias[5]
      default:
        return 'error'
      return 
    }
  }

  return (
    <ProductosContext.Provider value={{categorias, getCategoria}}>
      {props.children}
    </ProductosContext.Provider>
  )
}

export default ProductosProvider
