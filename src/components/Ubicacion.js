import './ubicacion.css'

const Ubicacion = (props) => {
  return (
    <div className="ubicacion">
      <img src={props.foto} alt="ubicacion yeniaart"/>
      <div className="ubicacion-info">
        <p className="ubicacion-info-nombre">
          {props.nombre}
          <span className="ubicacion-info-ciudad">{props.ciudad}</span>
          <span className="ubicacion-info-referencia">{props.referencia}</span>
        </p>
        <p className="ubicacion-info-text">
          {props.info}
        </p>
      </div>
    </div>
  );
}
 
export default Ubicacion;