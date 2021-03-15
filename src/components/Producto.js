import './producto.css'
import iBuscar from '../img/buscar.svg'

const Producto = (props) => {
  return (
    <div className="producto">
      <img src={props.img} alt={props.imginfo} className="producto-foto"/>
      <div className="producto-info">
        <div>
          <p className="producto-nombre">{props.nombre}</p>
          <p>{props.rangoprecio}</p>
        </div>
        <img src={iBuscar} alt="buscar yeniaArt" className="producto-ver" />
      </div>
    </div>
  );
}
 
export default Producto;