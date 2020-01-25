import React from 'react';

import './DevCard.scss';

const DevCard: React.FC = () => (
  <li className="dev-card">
    <header>
      <img
        src="https://avatars3.githubusercontent.com/u/51724047?s=400&u=241c0719559f8bb30c8c71e95a0fbd5ac46b3d69&v=4"
        alt="Yuri Azevedo"
      />

      <div className="user-info">
        <strong>Yuri Azevedo</strong>
        <span>ReactJS React Native</span>
      </div>
    </header>

    <p>Desenvolvedor Front-end Web e Mobile.</p>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/yuriazevedo11"
    >
      Acessar perfil no Github
    </a>
  </li>
);

export default DevCard;
