import React from 'react'
import './categoria.css'
import {withRouter} from 'react-router-dom'
import { useParams } from 'react-router'
import { nanoid } from 'nanoid'

import {ProductosContext} from '../context/ProductosProvider'

const Categoria = (props) => {

  const {getCategoria} = React.useContext(ProductosContext)

  const [categoriaActual, setCategoriaActual] = React.useState('')

  const {categoria} = useParams()

  React.useEffect(() => {
    if (getCategoria(categoria) === 'error') {
      props.history.push('/catalogo')
    }
    setCategoriaActual(getCategoria(categoria))

    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="categoria">
      {
        <div className="categoria-boxinfo">
          <div>
            <h2 className="titulo">{categoriaActual.nombre}</h2>
            <span className="categoria-rangoprecios">{categoriaActual.rangoprecio}</span>
            <p className="categoria-descripcion">{categoriaActual.descripcion}</p>
          </div>
        </div>
      }
      <div className="categoria-boxitems">
        {
          categoriaActual.items ? (
            categoriaActual.items.map((producto) => (
              <img
                key= {nanoid()}
                src={window.location.origin + '/imagenes/productos/' + producto.img} 
                alt="" 
                className="categoria-item-img"
                onClick={() => props.history.push('/catalogo/' + categoria + '/' + producto.img.split('.')[0])}
              />
            ))
          ) : <span>cargando</span>
        }
      </div>
      <div className="catalogo-menu">
        <a href={"https://api.whatsapp.com/send?phone=51957498221&text=Hola, quisiera realizar un pedido de " + categoria} target="_blank" rel="noreferrer">
          <img src={window.location.origin + '/iconos/icon_whatsapp.svg'} alt=""/>
        </a>
        <button className="catalogo-menu-categorias" onClick={() => props.history.push('/catalogo')}>
          <img src={window.location.origin + '/iconos/regresar.svg'} alt=""/>
        </button>
      </div>
    </main>
  )
}

export default withRouter(Categoria)
