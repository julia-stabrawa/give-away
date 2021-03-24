import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import What from "./components/organisms/What";
import About from "./components/organisms/About";
import Foundation from "./components/organisms/Foundation";
import Contact from "./components/organisms/Contact";
import LogIn from "./components/organisms/Contact";
import Register from "./components/organisms/Contact";
import HomeHeader from "./components/molecules/HomeHeader";

function App() {
  return (
      <Router>
          <HomeHeader />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/fund">
              <Foundation />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/what">
              <What />
            </Route>
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
