import Ubicacion from './Ubicacion'
import ubicacion1 from '../img/ubicacion_fotofelixNvoChimbote.jpg'
import ubicacion2 from '../img/ubicacion_fotofelixChimbote.jpg'
import './ubicanos.css'

const Ubicanos = () => {
  return (
    <div className="ubicanos">
      <h2 className="ubicanos-titulo titulo">Ubicanos</h2>
      <p className="ubicanos-text">Puedes encontrar nuestros productos en tiendas amigas</p>
      <div className="ubicanos-items">
        <Ubicacion 
          foto={ubicacion1} 
          googlemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.8228857881152!2d-78.5183459707829!3d-9.128118299590739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab85b2877e68e3%3A0x6ee09ea0ac3d188c!2sFoto%20Felix%20II!5e0!3m2!1ses-419!2spe!4v1615600725564!5m2!1ses-419!2spe"
          nombre="Foto Felix"
          ciudad="Nuevo Chimbote"
          referencia="Ovalo de la Familia"
          info="Aquí puedes realizar pedidos y comprar productos ya elaborados"
        />
        <Ubicacion 
          foto={ubicacion2}
          googlemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.9700500707099!2d-78.59353095943402!3d-9.07467731573326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8114e4143fb1%3A0x6df649e592a247a9!2sFoto%20Felix!5e0!3m2!1ses-419!2spe!4v1615600041713!5m2!1ses-419!2spe" 
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