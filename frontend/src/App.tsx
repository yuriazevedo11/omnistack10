import React from 'react';

import './styles/App.scss';
import { Sidebar } from './components';

const App: React.FC = () => {
  return (
    <div id="app">
      <Sidebar />
    </div>
  );
};

export default App;
