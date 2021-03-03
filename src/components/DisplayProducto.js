import './displayProducto.css'

const DisplayProducto = (props) => {
  return (
    <div className="displayProducto">
      <div className="displayProducto-info">
        <p className="displayProducto-info-titulo">{props.titulo}</p>
        <p className="displayProducto-info-antes">Producto especial a solo <span>{props.precioantes}</span></p>
        <p className="displayProducto-info-ahora">Antes <span>{props.precioahora}</span></p>
        <ul className=" displayProducto-info-descripcion">
          {
            props.descripcion.map((item, index)=>(
              <li key={index}>{item}</li>
            ))
          }
          
        </ul>
      </div>
      <div className="displayProducto-carrusel">
        <ul className="displayProducto-fotos">
          {
            props.images.map((item, index) => (
              <li key={index} id={item.id}><img src={item.foto} alt=""/></li>
            ))
          }
        </ul>
        <ul className="displayProducto-menu">
          {
            props.images.map((item, index) => (
              <li key={index}><a href={"#"+item.id}><img src={item.foto} alt=""/></a></li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
 
export default DisplayProducto;