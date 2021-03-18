import './header.css'
import marca from '../img/marca.png'
import MenuFullScreen from "./MenuFullScreen"
import {NavLink} from "react-router-dom"

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
            Catalogo
          </NavLink> 
      </div> 
      <MenuFullScreen/>
    </header>
  );
}
 
export default Header;