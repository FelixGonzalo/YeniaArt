import Especial from './Especial'
import './portada.css'
import imgFrase from '../img/fotoFrase.jpg'
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
        <img src={imgFrase} alt="frase de yeniart" className="portada-fotofrase"/>
        {/* <video src={videoPortada} width="640" height="480" autoPlay muted loop></video> */}
      </div>
    </div>
  );
}
 
export default Portada;