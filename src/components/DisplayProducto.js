import './displayProducto.css'
import img1 from '../img/portada.jpg'
import img2 from '../img/marca.png'
import img3 from '../img/ubicacion_fotofelixNvoChimbote.jpg'

const DisplayProducto = () => {
  return (
    <div className="displayProducto">
      <div className="displayProducto-info">
        <p className="displayProducto-info-titulo">Marco Pizarra</p>
        <p className="displayProducto-info-antes">Producto especial a solo <span>s/40</span></p>
        <p className="displayProducto-info-ahora">Antes <span>s/45</span></p>
        <ul className=" displayProducto-info-descripcion">
          <li>Texto personalizado</li>
          <li>3 Fotos 7x5 estilo vintage</li>
          <li>Marco 20x30</li>
          <li>Amor al Arte</li>
        </ul>
      </div>
      <div className="displayProducto-carrusel">
        <ul className="displayProducto-fotos">
          <li id="foto1"><img src={img1} alt=""/></li>
          <li id="foto2"><img src={img2} alt=""/></li>
          <li id="foto3"><img src={img3} alt=""/></li>
        </ul>
        <ul className="displayProducto-menu">
          <li><a href="#foto1"><img src={img1} alt=""/></a></li>
          <li><a href="#foto2"><img src={img2} alt=""/></a></li>
          <li><a href="#foto3"><img src={img3} alt=""/></a></li>
        </ul>
      </div>
    </div>
  );
}
 
export default DisplayProducto;