import React from 'react';
import Toolbar from './components/toolbar/toolbar';
import Landing from './pages/index'

const App: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <Landing />

    </div>
  );
}

export default App;
