import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Log from "./components/pages/Log";
import Register from "./components/pages/Register";
import LogOut from "./components/organisms/LogOut";

function App() {
    return (

        <Router>

            <Switch>
                <Route path="/logout">
                    <LogOut/>
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>

                <Route path="/log">
                    <Log/>
                </Route>

                <Route path="/">
                    <Home/>
                </Route>

            </Switch>

        </Router>

    );
}

export default App;

