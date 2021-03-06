import iArte from '../img/arte.svg'
import iCalidad from '../img/calidad.svg'
import iTransparencia from '../img/transparencia.svg'
import iMision from '../img/mision.svg'
import iVision from '../img/vision.svg'
import marca from '../img/marca.png'
import Valor from './Valor'
import './quienessomos.css'
import Mision from './Mision'

const QuienesSomos = () => {
  return (
    <div className="quienessomos"> 
      <h2 className="titulo">¿Quiénes somos?</h2>
      <p className="quienessomos-text">Negocio dedicado a la creación y venta de regalos personalizados con accesorios y el arte del lettering</p>
      <img src={marca} alt="yeniaart" className="quienessomos-marca"/>
      <h3 className="subtitulo quienessomos-valores-titulo">Valores</h3>
      <div className="quienessomos-valores">
        <Valor
          nombre="Arte"
          img={iArte}
          descripcion="Amor y pasión en nuestro trabajo"
        />
        <Valor
          nombre="Calidad"
          img={iCalidad}
          descripcion="En buen estado y al precio justo"
        />
        <Valor
          nombre="Transparencia"
          img={iTransparencia}
          descripcion="Trabajo honesto y responsable"
        />
      </div>
      <div className="quienessomos-misionvision">
        <Mision
          nombre="Misión"
          descripcion="Ofrecer a nuestros clientes regalos de calidad que pueden personalizar para todo tipo de evento"
          icon={iMision}
        />
        <Mision
          nombre="Visión"
          descripcion="En el 2022 ser una empresa lider en la venta de regalos en la provincia del Santa ofreciendo una amplia gama de productos de calidad."
          icon={iVision}
        />
      </div>
    </div>
  );
}
 
export default QuienesSomos;