import React, { useState } from 'react';

import './Sidebar.scss';
import InputField from '../InputField';

const Sidebar: React.FC = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
