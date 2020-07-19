import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
