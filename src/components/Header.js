import {NavLink} from "react-router-dom"
 
const Header = () => {
  return (
    <header>
      <NavLink to="/" exact>
        YeniaArt
      </NavLink>
      <NavLink to="/productos.personalizados" exact>
        Productos Personalizados
      </NavLink>
    </header>
  );
}
 
export default Header;