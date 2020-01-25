import React, { useEffect, useState } from 'react';
import { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Navigation } from '../../types';

import {
  MapContainer,
  Avatar,
  DevInfo,
  DevName,
  DevBio,
  DevTechs,
} from './MainScreen.styles';

interface Props {
  navigation: Navigation;
}

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState();

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;
        const delta = 0.04;

        setCurrentPosition({
          latitude,
          longitude,
          latitudeDelta: delta,
          longitudeDelta: delta,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentPosition) {
    return null;
  }

  return (
    <MapContainer initialRegion={currentPosition}>
      <Marker coordinate={{ latitude: -22.893278, longitude: -43.269732 }}>
        <Avatar
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/51724047?s=460&v=4',
          }}
        />

        <Callout
          onPress={() =>
            navigation.navigate('Profile', { github_username: 'yuriazevedo11' })
          }
        >
          <DevInfo>
            <DevName>Yuri Azevedo</DevName>
            <DevBio>Desenvolvedor Front-end Web e Mobile</DevBio>
            <DevTechs>ReactJS, React Native</DevTechs>
          </DevInfo>
        </Callout>
      </Marker>
    </MapContainer>
  );
};

export default MainScreen;
