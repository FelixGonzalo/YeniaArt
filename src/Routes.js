import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/footers/Footer'
import Header from './components/headers/Header'
import Catalogo from './pages/Catalogo'

import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'



const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/quienessomos" exact>
            <QuienesSomos/>
          </Route>
          <Route path="/catalogo" exact>
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