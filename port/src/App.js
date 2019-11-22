import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Land from "./Components/Land"
import Home from "./Components/Home";
import Work from "./Components/Work"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/home">About</a>
          <a href="/work">Projects &rarr;</a>
        </nav>
      </header>
      
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Land}/>
        <Route exact path="/work" component={Work}/>
      </Switch>
     
    </div>
  );
}

export default App;
