import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import PortfolioCard from "./components/PortfolioCard";

function App() {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <PortfolioCard
          projectName="Corona Crash"
          siteURL="https://maxtsimpson.github.io/coronaCrash/index"
          repoURL="https://github.com/maxtsimpson/coronaCrash"
          projectDescription="a project to view the impact of the corona virus on stock markets around the world"
        />
      </div>
    </div>
  );
}

export default App;
