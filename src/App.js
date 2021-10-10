import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes'

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        {routes.map((route, idx) =>(
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={idx}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default withRouter(App);
