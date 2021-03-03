import './especial.css'

const Especial = (props) => {
  return (
    <div className="especial">
      <div className="especial-info">
        <p className="especial-info-title">{props.titulo}</p>
        <p className="especial-info-text">{props.info}</p>
        <a href="#ofertas" className="especial-vermas">
          Ver más
        </a>
      </div>
      <img src={props.foto} alt="producto especial"/>
    </div>    
  );
}
 
export default Especial;