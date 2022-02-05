import React from 'react';
import Home from './screen/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import Marketplace from './screen/Marketplace';

function App() {

  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Marketplace" component={Marketplace} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
