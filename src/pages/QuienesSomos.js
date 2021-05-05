import React from 'react'
import './quienessomos.css'
import Portada from '../components/Portadas/Portada'
import Valor from '../components/cards/Valor'


const QuienesSomos = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="quienessomos"> 
      <Portada/>
      <h2 className="titulo">¿Quiénes somos?</h2>
      <p className="quienessomos-text">YeniaArt es un tienda de regalos virtual dedicada a la creación de productos personalizados con accesorios y el arte del lettering.</p>
      <div className="quienessomos-valores">
        <Valor
          nombre="Arte"
          img='arte.svg'
          descripcion="Amor y pasión en nuestro trabajo"
        />
        <Valor
          nombre="Calidad"
          img='calidad.svg'
          descripcion="En buen estado y al precio justo"
        />
        <Valor
          nombre="Transparencia"
          img='transparencia.svg'
          descripcion="Trabajo honesto y responsable"
        />
      </div>
      <div className="quienessomos-misionvision">
        <div className="mision">
          <p className="mision-nombre">Misión</p>
          <p className="mision-descripcion">Ofrecer a nuestros clientes regalos de calidad que pueden personalizar para todo tipo de evento.</p>
          <img src={window.location.origin + '/iconos/mision.svg'} alt=""/>
        </div>

        <div className="mision">
          <p className="mision-nombre">Visión</p>
          <p className="mision-descripcion">En el 2022 ser una empresa lider en la venta de regalos en la provincia del Santa ofreciendo una amplia gama de productos de calidad.</p>
          <img src={window.location.origin + '/iconos/vision.svg'} alt=""/>
        </div>
      </div>
    </main>
  );
}
 
export default QuienesSomos;