import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import VilleList from "./components/VilleList";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Accueil} path="/" exact />
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/signin"
            exact
          />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route
            path="/villelist:id">
              <VilleList villeList={cities} />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
