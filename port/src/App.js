import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Land from "./Components/Land";
import Home from "./Components/Home";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <a href={process.env.PUBLIC_URL + "/"}>HOME</a>
          <a href={process.env.PUBLIC_URL + "/home"}>ABOUT</a>
          <a href={process.env.PUBLIC_URL + "/work"}>PROJECTS &rarr;</a>
        </nav>
      </header>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Land} />
        <Route exact path={process.env.PUBLIC_URL + "/work"} component={Work} />
      </Switch>
    </div>
  );
}

export default App;
