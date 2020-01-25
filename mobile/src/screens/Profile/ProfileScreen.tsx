import React from 'react';

import { Navigation } from '../../types';

import { WebViewer, Loading } from './ProfileScreen.styles';

interface Props {
  navigation: Navigation;
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const githubUsername = navigation.getParam('github_username');

  const renderLoading = () => <Loading />;

  return (
    <WebViewer
      startInLoadingState
      renderLoading={renderLoading}
      source={{ uri: `https://github.com/${githubUsername}` }}
    />
  );
};

export default ProfileScreen;
