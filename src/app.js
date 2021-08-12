import Products from './templates/products';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';

const RouteComponent = ({ path, component }) => (
  <Route exact={true} path={path}>
    {component}
  </Route>
);

const App = () => {
  return (
    <Router>
      <Theme>
        <Switch>
          {/* <RouteComponent path="/" exact={true} component={Home} /> */}
          <RouteComponent path="/home/:brand" component={Products} />
        </Switch>
      </Theme>
    </Router>
  );
};

export default App;
