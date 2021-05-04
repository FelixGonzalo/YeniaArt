import './valor.css'

const Valor = (props) => {
  return (
    <div className="valor">
      <p className="valor-nombre">{props.nombre}</p>
      <img src={props.img} alt=""/>
      <p className="valor-descripcion">{props.descripcion}</p>
    </div>
  );
}
 
export default Valor;