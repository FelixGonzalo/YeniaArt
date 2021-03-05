import {NavLink} from "react-router-dom"
import './menuFullScreen.css'

const MenuFullScreen = () => {

  const cerrarMenu = (e) => {
    document.getElementById('menuFullScreen-opciones').classList.remove('menu-abrir')
       document.body.style.overflow = "auto"
  }

  const abrirMenu = (e) => {
    document.getElementById('menuFullScreen-opciones').classList.add('menu-abrir')
    document.body.style.overflow = "hidden"
  }

  return (
    <div className="menuFullScreen">
      <span className="menuFullScreen-abrir" onClick={(e) => abrirMenu(e)}>menu</span>
      <div className="menuFullScreen-opciones" id="menuFullScreen-opciones">
        <NavLink to="/" onClick={(e) => cerrarMenu(e)} exact className="menuFullScreen-option" activeClassName="menuFullScreen-activate">
          Inicio
        </NavLink>
        <NavLink to="/productos.personalizados" onClick={(e) => cerrarMenu(e)} exact className="menuFullScreen-option" activeClassName="menuFullScreen-activate"> 
          Productos Personalizados
        </NavLink>  
         <span className="menuFullScreen-opciones-cerrar" onClick={(e) => cerrarMenu(e)}>cerrar</span>
      </div>  
    </div>  
  );
}
 
export default MenuFullScreen;