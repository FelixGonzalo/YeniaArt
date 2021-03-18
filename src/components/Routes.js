import  {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Portada from './Portada'
import QueOfrecemos from './QueOfrecemos'
import QuienesSomos from './QuienesSomos'
import Catalogo from './Catalogo'
import Ubicanos from './Ubicanos'
import ContactBox from './ContactBox'

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <ContactBox/>
        <Switch>
          <Route path="/quienessomos" exact>
            <QuienesSomos/>
          </Route>
          <Route path="/catalogo" exact>
            <Catalogo/>
          </Route>
          <Route path="/">
            <Portada/>
            <QueOfrecemos/>
            <Ubicanos/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </Fragment>
  );
}
 
export default Routes;