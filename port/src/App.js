import React from "react";
import "./App.css";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Land from "./Components/Land"
import Home from "./Components/Home";
import Work from "./Components/Work"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <a href="/">HOME</a>
          <a href="/home">ABOUT</a>
          <a href="/work">PROJECTS &rarr;</a>
        </nav>
      </header>
      <HashRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Land}/>
        <Route exact path="/work" component={Work}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
