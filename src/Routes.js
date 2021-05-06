import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DisplayProducto from './pages/DisplayProducto'
import Footer from './components/footers/Footer'
import Header from './components/headers/Header'
import Catalogo from './pages/Catalogo'
import Categoria from './pages/Categoria'

import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'

const Routes = () => {

  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/quienessomos">
            <QuienesSomos/>
          </Route>
          <Route path="/catalogo/:categoria/:item">
            <DisplayProducto/>
          </Route>
          <Route path="/catalogo/:categoria">
            <Categoria/>
          </Route>
          <Route path="/catalogo">
            <Catalogo/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </Fragment>
  );
}
 
export default Routes;