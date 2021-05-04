import {Link} from "react-router-dom"
import './portada.css'
import imgFrase from '../../img/slider3d1.jpg'
import imgPortada from '../../img/portada.jpg'

const Portada = (props) => {
  return (
    <div className="portada">
      <div className="portada-left">
        <div className="especial">
          <div className="especial-info">
            <p className="especial-info-title">Amor al Lettering</p>
            <p className="especial-info-text">Regalos para toda ocasión</p>
            <Link to="/catalogo" className="especial-boton"> 
            Ver catálogo
            </Link> 
          </div>
          <img src={imgPortada} alt="producto especial"/>
        </div>    
      </div>
      <div className="portada-right">
        <img src={imgFrase} alt="frase de yeniart" className="portada-fotofrase"/>
        {/* <video src={videoPortada} width="640" height="480" autoPlay muted loop></video> */}
      </div>
    </div>
  );
}
 
export default Portada;