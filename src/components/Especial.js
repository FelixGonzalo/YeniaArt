import './especial.css'
import {Link} from "react-router-dom"

const Especial = (props) => {
  return (
    <div className="especial">
      <div className="especial-info">
        <p className="especial-info-title">{props.titulo}</p>
        <p className="especial-info-text">{props.info}</p>
        <Link to="/catalogo" className="especial-boton"> 
         {props.boton}
        </Link> 
      </div>
      <img src={props.foto} alt="producto especial"/>
    </div>    
  );
}
 
export default Especial;