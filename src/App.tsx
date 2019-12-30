import React from "react";
import Toolbar from "./components/layout/Toolbar";
import Footer from "./components/layout/Footer";
import Landing from "./pages/index";
import Challenges from "./pages/challenges/index";
import Contact from "./pages/contact";
import About from "./pages/about";
import RegisterIndex from "./pages/register/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/challenges" exact component={Challenges} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={RegisterIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
