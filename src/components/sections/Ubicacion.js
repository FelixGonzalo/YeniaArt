import './ubicacion.css'

const Ubicacion = (props) => {
  return (
    <div className="ubicacion">
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
      <img src={window.location.origin + '/imagenes/tiendas/'+props.foto} alt="ubicacion yeniaart" className="ubicacion-foto"/>
      <iframe title="tienda amiga" className="ubicacion-mapa" src={props.googlemap}  loading="lazy"></iframe>
    </div>
  );
}
 
export default Ubicacion;