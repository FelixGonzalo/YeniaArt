import './header.css'
import marca from '../../img/marca.png'
import MenuFullScreen from "../menus/MenuFullScreen"
import {NavLink} from "react-router-dom"
import iWhatsapp from '../../img/icon/icon_whatsapp.svg'

const Header = () => {

  const activarMenu = (e) => {
    document.getElementById('menuFullScreen-opciones').classList.toggle('menu-abrir')
    document.body.classList.toggle('body-overflow-off')
  }

  return (
    <div>
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
            <span className="header-celular">957498221</span>
            <img src={iWhatsapp} alt=""/>
          </a>
          <span className="menuFullScreen-abrir" onClick={(e) => activarMenu(e)}>menu</span>
        </div>
      </header>
      <MenuFullScreen activarMenu={activarMenu}/>
    </div>
  );
}
 
export default Header;