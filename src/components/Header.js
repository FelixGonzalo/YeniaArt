import {NavLink} from "react-router-dom"
import './header.css'
import marca from '../img/marca.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-inicio">
        <img src={marca} alt="yeniaart" className="header-marca"/>
        <h1>YeniaArt</h1>
      </div>
      <div className="header-menu">
        <div className="header_menu_switch">
          <span>Menu</span>
          <div className="header-menu-opciones">
            <NavLink to="/" exact className="header-option" activeClassName="header-activate">
              Inicio
            </NavLink>
            <NavLink to="/productos.personalizados" exact className="header-option" activeClassName="header-activate"> 
              Productos Personalizados
            </NavLink>  
          </div>  
        </div>        
      </div>
    </header>
  );
}
 
export default Header;