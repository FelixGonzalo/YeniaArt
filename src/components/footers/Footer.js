import './footer.css'
import {Link} from "react-router-dom"
import iFacebook from '../../img/icon/icon_facebook.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div  className="footer-top">
        <div>
          <h2>YeniaArt</h2>
          <p>Celular: 123456789</p>
          <p>Atención virtual: 8am - 9pm</p>
        </div>
        <ul className="footer-lista">
          <li className="footer-lista-titulo">
            Pages
          </li>
          <li>
            <Link to="/" className="footer-lista-link"> 
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/quienessomos" className="footer-lista-link"> 
              ¿Quiénes somos?
            </Link>
          </li>
          <li>
            <Link to="/catalogo" className="footer-lista-link"> 
              Catálogo
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="footer-bottom">
        <p>© Todos los derechos reservados 2021</p>
        <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer"><img src={iFacebook} alt=""/></a>
      </div>
    </footer>
  );
}
 
export default Footer;