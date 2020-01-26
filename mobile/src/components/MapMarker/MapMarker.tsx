import React from 'react';
import { Marker, Callout } from 'react-native-maps';

import { Navigation, Dev } from '../../types';

import { Avatar, DevInfo, DevName, DevBio, DevTechs } from './MapMarker.styles';

interface Props {
  navigation: Navigation;
  data: Dev;
}

const MapMarker: React.FC<Props> = ({
  navigation,
  data: { location, avatar_url, github_username, bio, techs },
}) => (
  <Marker
    coordinate={{
      latitude: location.coordinates[1],
      longitude: location.coordinates[0],
    }}
  >
    <Avatar source={{ uri: avatar_url }} />

    <Callout
      onPress={() =>
        navigation.navigate('Profile', {
          github_username,
        })
      }
    >
      <DevInfo>
        <DevName>{github_username}</DevName>
        <DevBio>{bio}</DevBio>
        <DevTechs>{techs.join(', ')}</DevTechs>
      </DevInfo>
    </Callout>
  </Marker>
);

export default MapMarker;
