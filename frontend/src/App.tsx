import React from 'react';

import './styles/App.scss';
import { Sidebar, DevCard } from './components';

const App: React.FC = () => {
  return (
    <div id="app">
      <Sidebar />

      <main>
        <ul>
          <DevCard />
          <DevCard />
          <DevCard />
          <DevCard />
        </ul>
      </main>
    </div>
  );
};

export default App;
