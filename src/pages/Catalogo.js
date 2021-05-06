import React from 'react'
import './catalogo.css'
import CategoriaItem from '../components/catalogo/CategoriaItem'
import { nanoid } from 'nanoid'

import {ProductosContext} from '../context/ProductosProvider'


const Catalogo = () => {

  const {categorias} = React.useContext(ProductosContext)


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="catalogo">
      <h2 className="titulo">CATÁLOGO</h2>
      <div className="catalogo-productos">
        {
          categorias.map((categoria) => (
            <CategoriaItem
              key= {nanoid()}
              slug={categoria.slug}
              img= {categoria.img}
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