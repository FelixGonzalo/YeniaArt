import {Link} from "react-router-dom"
import './portada.css'
import imgslider1 from '../../img/slider3d1.jpg'
import imgslider2 from '../../img/slider3d2.jpg'
import imgslider3 from '../../img/slider3d3.jpg'
import imgPortada from '../../img/portada.jpg'
import React from "react"

const Portada = (props) => {

  const [slider1, setSlider1] = React.useState(imgslider1);

  React.useEffect(() => {
    let cont = 0;
    const intervaloPortadaAutomatica = setInterval(function() {
      cont++;
      if (cont === 1) {
        setSlider1(imgslider1)
      } else if(cont === 2){
        setSlider1(imgslider2)
      } else if(cont === 3) {
        setSlider1(imgslider3)
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
          <img src={imgPortada} alt="producto especial"/>
        </div>    
      </div>
      <div className="portada-right">
        <img src={slider1} alt="frase de yeniart" className="portada-fotoslider"/>
      </div>
    </div>
  );
}
 
export default Portada;