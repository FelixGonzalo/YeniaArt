import './carrusel3d.css'

const Carrusel3D = (props) => {
  return (
    <div className="carrusel3d">
      <input type="radio" name="carrusel3d" id="radio1" defaultChecked />
      <input type="radio" name="carrusel3d" id="radio2"/>
      <input type="radio" name="carrusel3d" id="radio3"/>
      <input type="radio" name="carrusel3d" id="radio4"/>
      <input type="radio" name="carrusel3d" id="radio5"/>
      {
        props.fotos.map((item, index) => (
          <label key={index} htmlFor={"radio" + (index+1)} id={item.id}>
            <img src={item.img} alt=""/>
          </label>
        ))
      }
    </div>
  );
}
 
export default Carrusel3D;