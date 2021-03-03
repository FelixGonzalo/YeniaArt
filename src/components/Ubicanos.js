import Ubicacion from './Ubicacion'
import ubicacion1 from '../img/ubicacion_fotofelixNvoChimbote.jpg'
import './ubicanos.css'

const Ubicanos = () => {
  return (
    <div className="ubicanos">
      <h2 className="ubicanos-titulo">Ubicanos</h2>
      <p className="ubicanos-text">Puedes encontrar nuestros productos en tiendas amigas</p>
      <div className="ubicanos-items">
        <Ubicacion 
          foto={ubicacion1} 
          nombre="Foto Felix"
          ciudad="Nuevo Chimbote"
          referencia="Ovalo de la Familia"
          info="Aquí puedes realizar pedidos y comprar productos ya elaborados"
        />
        <Ubicacion 
          foto={ubicacion1} 
          nombre="Foto Felix"
          ciudad="Chimbote"
          referencia="Cerca a no se donde"
          info="Aquí puedes comprar productos ya elaborados"
        />
      </div>
    </div>
  );
}
 
export default Ubicanos;