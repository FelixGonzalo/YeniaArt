import Especial from './Especial'
import './portada.css'
import videoPortada from '../videos/portadavideo.mp4'
import imgPortada from '../img/portada.jpg'

const Portada = (props) => {
  return (
    <div className="portada">
      <div className="portada-left">
        <Especial 
          titulo="Amor al Lettering" 
          info="Regalos para toda ocasión" 
          foto={imgPortada}
          boton="Ver más"
        />
      </div>
      <div className="portada-right">
        <video src={videoPortada} width="640" height="480" autoPlay muted loop></video>
      </div>
    </div>
  );
}
 
export default Portada;