import './mision.css'

const Mision = (props) => {
  return (
    <div className="mision">
      <p className="mision-nombre">{props.nombre}</p>
      <p className="mision-descripcion">{props.descripcion}</p>
      <img src={props.icon} alt=""/>
    </div>
  );
}
 
export default Mision;