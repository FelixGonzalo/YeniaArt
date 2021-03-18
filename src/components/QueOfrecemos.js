import Carrusel3D from './Carrusel3D'

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
          <p className="queofrecemos-resumen-info-titulo">Regalos personalizados</p>
          <p>Paquetes de regalos, Cajas, Bolsas , Tazas, Canastas, Tarjetas, Marcos, etc</p>
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
      <p className="queofrecemos-terminos">
        Los pedidos personalizados tienen precios que pueden variar acorde al trabajo, tiempo de entrega, contenido y delivery</p>
    </div>
  );
}
 
export default QueOfrecemos;