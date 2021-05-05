import {Link} from "react-router-dom"
import './portada.css'
import React from "react"

const Portada = () => {

  const [slider1, setSlider1] = React.useState('paqueteregalo2.jpg');

  React.useEffect(() => {
    let cont = 0;
    const intervaloPortadaAutomatica = setInterval(function() {
      cont++;
      if (cont === 1) {
        setSlider1('paqueteregalo2.jpg')
      } else if(cont === 2){
        setSlider1('caja2.jpg')
      } else if(cont === 3) {
        setSlider1('paqueteregalo3.jpg')
      }
      if (cont > 3) {
        cont = 0
      }
    }, 6000)
    return () => {
      //clearing interval
      clearInterval(intervaloPortadaAutomatica)
    };
  }, [])

  return (
    <div className="portada">
      <div className="portada-left">
        <div className="especial">
          <div className="especial-info">
            <p className="especial-info-title">Amor al Lettering</p>
            <p className="especial-info-text">Regalos para toda ocasión</p>
            <Link to="/catalogo" className="especial-boton"> 
            Ver catálogo
            </Link> 
          </div>
          <img src={window.location.origin + '/imagenes/productos/marco2.jpg'} alt="producto especial"/>
        </div>    
      </div>
      <div className="portada-right">
        <img src={window.location.origin + '/imagenes/productos/' + slider1} alt="frase de yeniart" className="portada-fotoslider"/>
      </div>
    </div>
  );
}
 
export default Portada;