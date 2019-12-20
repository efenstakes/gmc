import React from "react";
import Toolbar from "./components/toolbar/toolbar";
import Footer from "./components/footer/footer";
import Landing from "./pages/index";
import Challenges from "./pages/challenges/index";
import Contact from "./pages/contact";
import About from "./pages/about";
import RegisterIndex from "./pages/register/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
          <Route
            path="/"
            render={() => (
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                404
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
