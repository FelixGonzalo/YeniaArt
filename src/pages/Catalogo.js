import React from 'react'
import './catalogo.css'
import Producto from '../components/catalogo/Producto'
import infoPaqueteRegalo from '../img/infoPaqueteRegalo.jpg'
import infoTazas from '../img/infoTazas.jpg'
import infoCanastas from '../img/infoCanastas.jpg'
import infoCajas from '../img/infoCajas.jpg'
import infoMarcos from '../img/infoMarcos.jpg'
import infoBolsas from '../img/infoBolsas.jpg'
import infoTarjetas from '../img/infoTarjetas.jpg'
import Portada from '../components/Portadas/Portada'

const Catalogo = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="catalogo">
      <Portada/>
      <h2 className="titulo catalogo-titulo">CATÁLOGO</h2>
      <div className="catalogo-productos">
        <Producto
          img= {infoPaqueteRegalo}
          imginfo= "paquetes de regalo personalizado"
          nombre="Paquetes de regalo"
          rangoprecio="desde s/20"
        />
        <Producto
          img= {infoCajas}
          imginfo= "cajas personalizadas"
          nombre="Cajas"
          rangoprecio="desde s/20"
        />
        <Producto
          img= {infoBolsas}
          imginfo= "bolsas personalizadas"
          nombre="Bolsas"
          rangoprecio="desde s/20"
        />
        <Producto
          img= {infoTazas}
          imginfo= "tazas personalizadas"
          nombre="Tazas"
          rangoprecio="desde s/20 "
        />
        <Producto
          img= {infoCanastas}
          imginfo= "canastas de regalo"
          nombre="Canastas"
          rangoprecio="desde s/20"
        />
        <Producto
          img= {infoTarjetas}
          imginfo= "Tarjetas personalizadas"
          nombre="Tarjetas"
          rangoprecio="desde s/20"
        />
        <Producto
          img= {infoMarcos}
          imginfo= "marcos personalizados"
          nombre="Marcos"
          rangoprecio="desde s/20"
        />
      </div>
    </div>
  );
}
 
export default Catalogo;