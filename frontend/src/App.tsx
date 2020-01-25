import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { Sidebar, DevCard } from './components';
import { Dev, NewDev } from './types';
import api from './services/api';

import './styles/App.scss';

const App: React.FC = () => {
  const [devs, setDevs] = useState<Dev[]>([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get<Dev[]>('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(params: NewDev) {
    const response = await api.post<Dev>('/devs', params);

    setDevs([...devs, response.data]);
  }

  return (
    <>
      <div id="app">
        <Sidebar onSubmit={handleAddDev} />

        <main>
          <ul>
            {devs.map(dev => (
              <DevCard key={dev._id} data={dev} />
            ))}
          </ul>
        </main>
      </div>

      <ToastContainer autoClose={3000} pauseOnHover={false} />
    </>
  );
};

export default App;
