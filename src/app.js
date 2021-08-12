import Products from './templates/products';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';

const RouteComponent = ({ path, component }) => (
  <Route exact={true} path={path}>
    {component}
  </Route>
);

const SwitchRoutes = () => {
  return (
    <Switch>
      {/* <RouteComponent path="/" exact={true} component={Home} /> */}
      <RouteComponent path="/vivareal" component={Products} />
      <RouteComponent path="/zap" component={Products} />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <Theme>
        <SwitchRoutes />
      </Theme>
    </Router>
  );
};

export default App;
