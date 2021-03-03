import {Link} from 'react-router-dom'
import imgPortada from '../img/portada.jpg'
import './especial.css'

const Especial = () => {
  return (
    <div className="especial">
      <div className="especial-info">
        <p className="especial-info-title">Marco Pizarra</p>
        <p className="especial-info-text">Productos especiales</p>
        <Link to="/" className="especial-vermas">
          Ver más
        </Link>
      </div>
      <img src={imgPortada} alt="producto especial"/>
    </div>    
  );
}
 
export default Especial;