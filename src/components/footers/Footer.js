import './footer.css'
import iFacebook from '../../img/icon/icon_facebook.svg'

const Footer = () => {
  return (
    <footer className="footer">
       

        <p>© Todos los derechos reservados 2021</p>
        <a href="https://www.facebook.com/YeniaArt/" target="_blank" rel="noreferrer"><img src={iFacebook} alt=""/></a>
    </footer>
  );
}
 
export default Footer;