import Ubicacion from './Ubicacion'
import ubicacion1 from '../img/ubicacion_fotofelixNvoChimbote.jpg'

const Ubicanos = () => {
  return (
    <div className="ubicanos">
      <h2>Ubicanos</h2>
      <p>Puedes encontrar nuestros productos en tiendas amigas</p>
      <Ubicacion 
        foto={ubicacion1} 
        nombre="Foto Felix"
          ciudad="Nuevo Chimbote"
        referencia="Cerca al ovalo de la Familia"
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
  );
}
 
export default Ubicanos;