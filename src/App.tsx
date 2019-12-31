import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Toolbar from "./components/layout/Toolbar";
import Footer from "./components/layout/Footer";
import Landing from "./pages/index";
import Challenges from "./pages/challenges/index";
import About from "./pages/about";
import RegisterIndex from "./pages/register/index";
import NotFound from './pages/404'


import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/challenges" exact component={Challenges} />          
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={RegisterIndex} />
          <Route path="/" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
