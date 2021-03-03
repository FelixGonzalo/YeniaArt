import Especial from './Especial'
import './portada.css'
import videoPortada from '../videos/portadavideo.mp4'
import imgPortada from '../img/portada.jpg'

const Portada = () => {
  return (
    <div className="portada">
      <div className="portada-left">
        <Especial 
          titulo="Día de la Madre" 
          info="Te amo Mamá" 
          foto={imgPortada}
        />
      </div>
      <div className="portada-right">
        <video src={videoPortada} width="640" height="480" autoPlay muted loop></video>
      </div>
    </div>
  );
}
 
export default Portada;