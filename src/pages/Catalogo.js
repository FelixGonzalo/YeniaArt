import React from 'react'
import './catalogo.css'
import Portada from '../components/Portadas/Portada'
import Producto from '../components/catalogo/Producto'
import { nanoid } from 'nanoid'

import {ProductosContext} from '../context/ProductosProvider'

const Catalogo = () => {

  const {categorias} = React.useContext(ProductosContext)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="catalogo">
      <Portada/>
      <h2 className="titulo catalogo-titulo">CATÁLOGO</h2>
      <div className="catalogo-productos">
        {
          categorias.map((categoria) => (
            <Producto
              key= {nanoid()}
              img= {window.location.origin + '/imagenes/productos/' + categoria.img}
              imginfo= {categoria.imginfo}
              nombre= {categoria.nombre}
              rangoprecio= {categoria.rangoprecio}
              descripcion = {categoria.descripcion}
            />
          ))
        }
      </div>
    </main>
  );
}
 
export default Catalogo;