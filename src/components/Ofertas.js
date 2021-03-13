import './ofertas.css'
import DisplayProducto from './DisplayProducto'
import img1 from '../img/portada.jpg'
import img2 from '../img/marca.png'
import img3 from '../img/ubicacion_fotofelixNvoChimbote.jpg'


const Ofertas = () => {
  return (
    <div className="ofertas" id="ofertas">
      <h2 className="Ofertas-titulo titulo">Ofertas</h2>
      <DisplayProducto
        titulo="Marco Pizarra"
        precioantes="s/45"
        precioahora="s/40"
        descripcion={[
          'Texto personalizado',
          '3 Fotos 7x5 estilo vintage',
          'Marco 20x30',
          'Amor al Arte',
          ]}
        images={[
          {
            id: 'oferta1',
            foto: img1
          },
          {
            id: "oferta2",
            foto: img2
          },
          {
            id: "oferta3",
            foto: img3
          }
        ]}
      />
    </div>
  );
}
 
export default Ofertas;