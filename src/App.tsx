import React from 'react';
import Toolbar from './components/toolbar/toolbar'
import Footer from './components/footer/footer'
import Landing from './pages/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <Toolbar />

      <Landing />

      <Footer />
    </div>
  );
}

export default App;
