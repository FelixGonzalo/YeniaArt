import Routes from './Routes';
import ProductosProvider from './context/ProductosProvider'

function App() {
  return (
    <ProductosProvider>
      <Routes/>
    </ProductosProvider>
  );
}

export default App;
