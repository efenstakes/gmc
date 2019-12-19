import React from 'react';
import Toolbar from './components/toolbar/toolbar'
import Footer from './components/footer/footer'
import Landing from './pages/index'
import Challenges from './pages/challenges/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <Toolbar />

      {/* <Landing /> */}
      <Challenges />

      <Footer />
    </div>
  );
}

export default App;
