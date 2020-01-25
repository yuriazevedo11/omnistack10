import React from 'react';
import { ToastContainer } from 'react-toastify';

import './styles/App.scss';
import { Sidebar, DevCard } from './components';

const App: React.FC = () => {
  return (
    <>
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

      <ToastContainer autoClose={3000} pauseOnHover={false} />
    </>
  );
};

export default App;
