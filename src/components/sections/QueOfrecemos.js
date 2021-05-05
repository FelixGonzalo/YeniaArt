import './queofrecemos.css'
import Carrusel3D from '../sliders/Carrusel3D'

const QueOfrecemos = () => {
  return (
    <section className="queofrecemos">
      <h2 className="queofrecemos-titulo titulo">¿Qué ofrecemos?</h2>
      <div className="queofrecemos-resumen">
        <div className="queofrecemos-resumen-info">
          <p className="queofrecemos-resumen-info-titulo">Regalos para todo evento:</p>
          <p>Cajas, Bolsas , Tazas, Canastas, Tarjetas, Marcos, Paquetes de regalos y mucho más.</p>
          <ul>
            <li>Donde tu decides:</li>
            <li>Textos.</li>
            <li>Colores.</li>
            <li>Dibujos.</li>
            <li>Temática.</li>
            <li>Dulces.</li>
            <li>Peluches.</li>
            <li>Etc.</li>
          </ul>      
        </div>
          <Carrusel3D
          fotos={[
              {
                id: 'slider3d1',
                img: 'paqueteregalo4.jpg'
              },
              {
                id: 'slider3d2',
                img: 'caja2.jpg'
              },
              {
                id: 'slider3d3',
                img: 'paqueteregalo2.jpg'
              },
              {
                id: 'slider3d4',
                img: 'marco3.jpg'
              },
              {
                id: 'slider3d5',
                img: 'paqueteregalo3.jpg'
              }
            ]}
          />
      </div>
      <p className="queofrecemos-terminos">
        Los pedidos personalizados tienen precios que pueden variar acorde al trabajo, tiempo de entrega, contenido y delivery.</p>
    </section>
  );
}
 
export default QueOfrecemos;