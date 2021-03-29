import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/organisms/Contact";
import Register from "./components/organisms/Contact";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/log">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
