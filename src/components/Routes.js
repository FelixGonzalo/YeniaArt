import  {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Portada from './Portada'
import Ubicanos from './Ubicanos'


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
            <Portada/>
            <Ubicanos/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;