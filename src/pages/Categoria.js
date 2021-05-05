import React from 'react'
import './categoria.css'
import {withRouter} from 'react-router-dom'
import { useParams } from 'react-router'

import {ProductosContext} from '../context/ProductosProvider'

const Categoria = (props) => {

  const {getCategoria} = React.useContext(ProductosContext)

  const [categoriaActual, setCategoriaActual] = React.useState('')

  const {categoria} = useParams()

  React.useEffect(() => {
    if (getCategoria(categoria) == 'error') {
      props.history.push('/catalogo')
    }
    setCategoriaActual(getCategoria(categoria))
  }, [])

  return (
    <main className="categoria">
      {
        <div className="categoria-boxinfo">
          <h2 className="titulo">{categoriaActual.nombre}</h2>
          <span className="categoria-rangoprecios">{categoriaActual.rangoprecio}</span>
          <p className="categoria-descripcion">{categoriaActual.descripcion}</p>
        </div>
      }
      <div className="categoria-boxitems">
        {
          categoriaActual.items ? (
            categoriaActual.items.map((categoria) => (
              <img src={window.location.origin + '/imagenes/productos/' + categoria} alt="" className="categoria-item-img"/>
            ))
          ) : <span>cargando</span>
        }
      </div>
    </main>
  )
}

export default withRouter(Categoria)
