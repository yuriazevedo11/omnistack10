import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import './Sidebar.scss';
import InputField from '../InputField';

const Sidebar: React.FC = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: lat, longitude: long } = position.coords;

        setLatitude(String(lat));
        setLongitude(String(long));
      },
      error => {
        const geolocationError =
          {
            [error.PERMISSION_DENIED]:
              'Usuário recusou o pedido de geolocalização',
            [error.POSITION_UNAVAILABLE]:
              'Informações de localização indisponíveis',
            [error.TIMEOUT]:
              'A solicitação para obter a localização do usuário atingiu o tempo limite',
          }[error.code] || 'Ocorreu um erro desconhecido';

        toast.error(geolocationError);
      },
      {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <aside className="sidebar">
      <strong>Cadastrar</strong>
      <form onSubmit={e => e.preventDefault()}>
        <InputField
          id="github_username"
          name="github_username"
          value={githubUsername}
          onChange={setGithubUsername}
          label="Usuário do Github"
          required
        />

        <InputField
          id="techs"
          name="techs"
          value={techs}
          onChange={setTechs}
          label="Tecnologias"
          required
        />

        <div className="input-group">
          <InputField
            id="latitude"
            name="latitude"
            type="number"
            value={latitude}
            onChange={setLatitude}
            label="Latitude"
            required
          />

          <InputField
            id="longitude"
            name="longitude"
            type="number"
            value={longitude}
            onChange={setLongitude}
            label="Longitude"
            required
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
};

export default Sidebar;
