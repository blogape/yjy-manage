import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Login from "./pages/login/index.js";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons/index";
import Nomatch from "./pages/nomatch/index";
import Modals from './pages/ui/modals/index.js';
class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => 
              <Admin>
              <Switch>
                <Route   path="/admin/ui/buttons" component={Buttons} />
                <Route   path="/admin/ui/modals" component={Modals} />
                <Route   component={Nomatch} />
                </Switch>
              </Admin>
            }
          />
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
