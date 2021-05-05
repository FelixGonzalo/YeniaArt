import {NavLink} from "react-router-dom"
import './menuFullScreen.css'

const MenuFullScreen = (props) => {

  return (
    <div className="menuFullScreen">
      {/* <span className="menuFullScreen-abrir" onClick={(e) => abrirMenu(e)}>menu</span> */}
      <div className="menuFullScreen-opciones" id="menuFullScreen-opciones">
        <NavLink to="/" onClick={(e) => props.activarMenu(e)} exact className="menuFullScreen-option" activeClassName="menuFullScreen-activate">
          Inicio
        </NavLink>
        <NavLink to="/quienessomos" onClick={(e) => props.activarMenu(e)} exact className="menuFullScreen-option" activeClassName="menuFullScreen-activate"> 
          ¿Quiénes somos?
        </NavLink>
        <NavLink to="/catalogo" onClick={(e) => props.activarMenu(e)} exact className="menuFullScreen-option" activeClassName="menuFullScreen-activate"> 
          Catálogo
        </NavLink>
         <span className="menuFullScreen-opciones-cerrar" onClick={(e) => props.activarMenu(e)}>cerrar</span>
      </div>  
    </div>  
  );
}
 
export default MenuFullScreen;