import  {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/productos.personalizados">
            Productos Personalizados
          </Route>
          <Route path="/">
            Inicio
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;