import './header.css'
import marca from '../../img/marca.png'
import MenuFullScreen from "../menus/MenuFullScreen"
import {NavLink} from "react-router-dom"
import iWhatsapp from '../../img/icon/icon_whatsapp.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-negocio">
        <img src={marca} alt="yeniaart" className="header-marca"/>
        <h1>YeniaArt</h1>
        <NavLink to="/" exact className="header-option" activeClassName="header-activate">
          Inicio
        </NavLink>
        <NavLink to="/quienessomos" exact className="header-option" activeClassName="header-activate"> 
          ¿Quiénes somos?
        </NavLink> 
        <NavLink to="/catalogo" exact className="header-option" activeClassName="header-activate"> 
          Catálogo
        </NavLink> 
      </div> 
      <div className="header-opciones">
        <a href="https://api.whatsapp.com/send?phone=51957498221" target="_blank" rel="noreferrer" className="header-redsocial">
          <img src={iWhatsapp} alt=""/>
        </a>
        <MenuFullScreen/>
      </div>
    
    </header>
  );
}
 
export default Header;