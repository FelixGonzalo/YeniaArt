import Carrusel3D from './Carrusel3D'
import infoPaqueteRegalo from '../img/infoPaqueteRegalo.jpg'
import infoTazas from '../img/infoTazas.jpg'
import infoCanastas from '../img/infoCanastas.jpg'
import infoCajas from '../img/infoCajas.jpg'
import infoMarcos from '../img/infoMarcos.jpg'
import infoBolsas from '../img/infoBolsas.jpg'
import infoTarjetas from '../img/infoTarjetas.jpg'

import slider3d1 from '../img/slider3d1.jpg'
import slider3d2 from '../img/slider3d2.jpg'
import slider3d3 from '../img/slider3d3.jpg'
import slider3d4 from '../img/slider3d4.jpg'
import slider3d5 from '../img/slider3d5.jpg'


import Producto from './Producto'
import './queofrecemos.css'

const QueOfrecemos = () => {
  return (
    <div className="queofrecemos">
      <h2 className="queofrecemos-titulo titulo">¿Qué ofrecemos?</h2>
      <div className="queofrecemos-resumen">
        <div className="queofrecemos-resumen-info">
          <p className="queofrecemos-resumen-info-titulo">Realizamos</p>
          <p>Paquetes de regalos, Cajas, Bolsas , Tazas, Canastas, Tarjetas, Marcos</p>
          <ul>
            <li>Tu decides:</li>
            <li>Texto y dibujos</li>
            <li>Temática</li>
            <li>Dulces</li>
            <li>Peluches</li>
            <li>etc</li>
          </ul>      
        </div>
          <Carrusel3D
          fotos={[
              {
                id: 'slider3d1',
                img: slider3d1
              },
              {
                id: 'slider3d2',
                img: slider3d2
              },
              {
                id: 'slider3d3',
                img: slider3d3
              },
              {
                id: 'slider3d4',
                img: slider3d4
              },
              {
                id: 'slider3d5',
                img: slider3d5
              }
            ]}
          />
      </div>
      <p className="queofrecemos-productos-terminos">Todos los pedidos son personalizados y los precios pueden variar acorde al trabajo</p>
      <div className="queofrecemos-productos">
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
 
export default QueOfrecemos;