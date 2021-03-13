import  {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Ofertas from './Ofertas'
import Portada from './Portada'
import Ubicanos from './Ubicanos'


const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/queofrecemos" exact>
            qué ofrecemos
          </Route>
          <Route path="/quienessomos" exact>
            quiénes somos?
          </Route>
          <Route path="/" exact>
            <Portada/>
            <Ubicanos/>
            <Ofertas/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </Fragment>
  );
}
 
export default Routes;