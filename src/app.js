import Products from './templates/products';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';
import Context from './utils/context';

const SwitchRoutes = () => {
  return (
    <Switch>
      <Route exact path="/vivareal/:businessType" render={() => <Products />} />
      <Route exact path="/zap/:businessType" render={() => <Products />} />
      <Route exact path="/*" render={() => <div>oi</div>} />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <Context>
        <Theme>
          <SwitchRoutes />
        </Theme>
      </Context>
    </Router>
  );
};

export default App;
