import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/footers/Footer'
import Header from './components/headers/Header'

import QuienesSomos from './pages/QuienesSomos'
import Catalogo from './components/Catalogo'

import ContactBox from './components/ContactBox'

import Inicio from './pages/Inicio'

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
            <ContactBox/>
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