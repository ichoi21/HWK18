import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
