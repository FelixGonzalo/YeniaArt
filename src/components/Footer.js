import './footer.css'
import iFacebook from '../img/icon_facebook.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socialnetwork">
       <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer"><img src={iFacebook} alt=""/></a>
      </div>
      <div className="footer-bottom">
        <p>© Todos los derechos reservados 2021</p>
        <p>Elaborado por <a href="https://www.facebook.com/felixcastro003/" target="_blank" rel="noreferrer" className="footer-bottom-gracias">Felix Castro</a></p>
      </div>
    </footer>
  );
}
 
export default Footer;