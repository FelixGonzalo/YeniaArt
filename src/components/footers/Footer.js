import React from 'react'
import './footer.css'
import {Link} from "react-router-dom"
import {ImagesContext} from '../../context/ImagesProvider'

const Footer = () => {
  const {urlicon} = React.useContext(ImagesContext)
  return (
    <footer className="footer">
      <div className="footer-container">
        <div  className="footer-top">
          <div>
            <h2>YeniaArt</h2>
            <p>Celular : 957498221</p>
            <p>Horario : 8am - 9pm</p>
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
          <p><span>©</span> Todos los derechos reservados 2021</p>
          <div>
            {/* https://api.whatsapp.com/send?phone=+51920050296&text=hola%20hola */}
            <a href="https://api.whatsapp.com/send?phone=51957498221" target="_blank" rel="noreferrer">
              <img src={urlicon + 'icon_whatsapp.svg'} alt=""/>
            </a>
            <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer">
              <img src={urlicon + 'icon_facebook.svg'} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;