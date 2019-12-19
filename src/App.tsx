import React from 'react';
import Toolbar from './components/toolbar/toolbar'
import Footer from './components/footer/footer'
import Landing from './pages/index'
import Challenges from './pages/challenges/index'
import Contact from './pages/contact'
import About from './pages/about'
import RegisterIndex from './pages/register/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <Toolbar />

      {/* <Landing />
      <Challenges />
      <Contact /> 
      <About /> */}
      <RegisterIndex />

      <Footer />
    </div>
  );
}

export default App;
