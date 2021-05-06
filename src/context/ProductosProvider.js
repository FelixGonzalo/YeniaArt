import React from 'react'

export const ProductosContext = React.createContext()

const ProductosProvider = (props) => {

  const categorias = [
    {
      id: 1,
      slug: 'paquetes-regalo',
      img: 'paqueteregalo1.jpg',
      imginfo: "paquetes de regalo personalizado",
      nombre: "Paquetes de regalo",
      rangoprecio: "desde s/30.00",
      descripcion: "Con cajas, bolsas, tazas, tarjetas, marcos, peluches, dulces, globos, etc.",
      items: [
        {
          nombre: 'paqueteregalo1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'paqueteregalo1.jpg',
        },
        {
          nombre: 'paqueteregalo2',
          precio: 30,
          descripcion: 'descripcion',
          img: 'paqueteregalo2.jpg',
        },
        {
          nombre: 'paqueteregalo3',
          precio: 30,
          descripcion: 'descripcion',
          img: 'paqueteregalo3.jpg',
        },
        {
          nombre: 'paqueteregalo4',
          precio: 30,
          descripcion: 'descripcion',
          img: 'paqueteregalo4.jpg',
        },
      ]
    },
    {
      id: 2,
      slug: 'cajas',
      img: 'caja1.jpg',
      imginfo: "cajas personalizadas",
      nombre: "Cajas",
      rangoprecio: "desde s/20.00",
      descripcion: "Incluye tu texto, dibujos y diseño (Lettering). Tu te encargas de llenarlo !!",
      items: [
        {
          nombre: 'caja1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'caja1.jpg',
        },
        {
          nombre: 'caja2',
          precio: 30,
          descripcion: 'descripcion',
          img: 'caja2.jpg',
        },
      ]
    },
    {
      id: 3,
      slug: 'bolsas',
      img: 'bolsa1.jpg',
      imginfo: "Bolsas personalizadas",
      nombre: "Bolsas",
      rangoprecio: "desde s/11.00",
      descripcion: "Incluye tu texto (Lettering). Entrega tu regalo con estilo !!",
      items: [
        {
          nombre: 'bolsa1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'bolsa1.jpg',
        },
      ]
    },
    {
      id: 4,
      slug: 'tazas',
      img: 'taza1.jpg',
      imginfo: "Tazas personalizadas",
      nombre: "Tazas",
      rangoprecio: "desde s/20.00",
      descripcion: "Incluye tus fotos, texto y diseño.",
      items: [
        {
          nombre: 'taza1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'taza1.jpg',
        },
      ]
    },
    {
      id: 5,
      slug: 'tarjetas',
      img: 'tarjeta1.jpg',
      imginfo: "Tarjetas personalizadas",
      nombre: "Tarjetas",
      rangoprecio: "desde s/10.00",
      descripcion: "Incluye tu texto, dibujos y diseño (Lettering). Acompaña tus regalos con un mensaje !!",
      items: [
        {
          nombre: 'tarjeta1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'tarjeta1.jpg',
        },
      ]
    },
    {
      id: 6,
      slug: 'marcos',
      img: 'marco3.jpg',
      imginfo: "Marcos personalizados",
      nombre: "Marcos",
      rangoprecio: "desde s/15.00",
      descripcion: "Incluye impresión de fotos, texto, dibujos y diseño (Lettering).",
      items: [
        {
          nombre: 'marco1',
          precio: 30,
          descripcion: 'descripcion',
          img: 'marco1.jpg',
        },
        {
          nombre: 'marco2',
          precio: 30,
          descripcion: 'descripcion',
          img: 'marco2.jpg',
        },
        {
          nombre: 'marco3',
          precio: 30,
          descripcion: 'descripcion',
          img: 'marco3.jpg',
        },
      ]
    },
  ]

  const productosSugeridos = [
    {
      slug:'tazas',
      img:'taza1.jpg',
    },
    {
      slug:'marcos',
      img:'marco2.jpg',
    },
    {
      slug:'bolsas',
      img:'bolsa1.jpg',
    },
    {
      slug:'cajas',
      img:'caja2.jpg',
    },
    {
      slug:'marcos',
      img:'marco1.jpg',
    },
    {
      slug:'paquetes-regalo',
      img:'paqueteregalo3.jpg',
    },
  ]

  const getCategoria = (categoria = '') => {
    switch (categoria) {
      case 'paquetes-regalo':
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
    }
  }

  const getProducto = (categoria, item) => {
    let array = []
    let producto = null
    switch (categoria) {
      case 'paquetes-regalo':
        array = categorias[0]
        break;
      case 'cajas':
        array = categorias[1]
        break;
      case 'bolsas':
        array = categorias[2]
        break;
      case 'tazas':
        array = categorias[3]
        break;
      case 'tarjetas':
        array = categorias[4]
        break;
      case 'marcos':
        array = categorias[5]
        break;
      default:
        array = []
        break;
    }

    array.items.forEach((nodo) => {
      if (nodo.img === (item + '.jpg')) {
        producto =  nodo
      }
    })
    return producto
  }

  return (
    <ProductosContext.Provider value={{categorias, getCategoria, getProducto, productosSugeridos}}>
      {props.children}
    </ProductosContext.Provider>
  )
}

export default ProductosProvider
