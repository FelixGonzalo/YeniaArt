import iArte from '../img/icon/arte.svg'
import iCalidad from '../img/icon/calidad.svg'
import iTransparencia from '../img/icon/transparencia.svg'
import iMision from '../img/icon/mision.svg'
import iVision from '../img/icon/vision.svg'
import Valor from '../components/cards/Valor'
import './quienessomos.css'
import Mision from '../components/Mision'

const QuienesSomos = () => {
  return (
    <div className="quienessomos"> 
      <h2 className="titulo">¿Quiénes somos?</h2>
      <p className="quienessomos-text">YeniaArt es un tienda de regalos virtual dedicada a la creación de productos personalizados con accesorios y el arte del lettering.</p>
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
          descripcion="Ofrecer a nuestros clientes regalos de calidad que pueden personalizar para todo tipo de evento."
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