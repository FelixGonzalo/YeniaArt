import Routes from './Routes';
import ProductosProvider from './context/ProductosProvider'
import ImagesProvider from './context/ImagesProvider'

function App() {
  return (
    <ImagesProvider>
      <ProductosProvider>
        <Routes/>
      </ProductosProvider>
    </ImagesProvider>
  );
}

export default App;
