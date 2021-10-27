import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
