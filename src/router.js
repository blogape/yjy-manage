import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home/index.js';
import Recipedetail from './pages/recipeinfo/recipedetail/index.js';
import App from "./App.js";
import Login from "./pages/login/index.js";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons/index";
import Nomatch from "./pages/nomatch/index";
import Modals from './pages/ui/modals/index.js';
import Recipelist from './pages/recipeinfo/recipelist/index.js'
import Addrecipe from './pages/recipeinfo/recipeadd/recipeadd.js';
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
                <Route   path="/admin/home" component={Home} />
                <Route   path="/admin/ui/modals" component={Modals} />
                <Route   path="/admin/recipe/recipelist" component={Recipelist} />
                <Route   path="/admin/recipe/recipedetail/id" component={Recipedetail} />
                <Route   path="/admin/recipe/addrecipe" component={Addrecipe}/>
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
