import React from 'react';

import { Dev } from '../../types';

import './DevCard.scss';

interface Props {
  data: Dev;
}

const DevCard: React.FC<Props> = ({
  data: { avatar_url, bio, github_username, techs },
}) => (
  <li className="dev-card">
    <header>
      <img src={avatar_url} alt={github_username} />

      <div className="user-info">
        <strong>{github_username}</strong>
        <span>{techs.join(', ')}</span>
      </div>
    </header>

    <p>{bio}</p>
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
