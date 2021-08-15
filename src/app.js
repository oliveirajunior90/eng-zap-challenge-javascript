import Products from './templates/products';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Context from './utils/context';
import Theme from './theme';

const SwitchRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/vivareal/venda"
        render={(props) => <Products {...props} />}
      />
      <Route
        exact
        path="/vivareal/aluguel"
        render={(props) => <Products {...props} />}
      />
      <Route
        exact
        path="/zap/venda"
        render={(props) => <Products {...props} />}
      />
      <Route
        exact
        path="/zap/aluguel"
        render={(props) => <Products {...props} />}
      />
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
