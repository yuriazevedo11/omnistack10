import React, { useEffect, useState } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import { Region } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { MapMarker } from '../../components';
import { Navigation, Dev } from '../../types';

import {
  MapContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './MainScreen.styles';

interface Props {
  navigation: Navigation;
}

const INITIAL_POSITION: Region = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(INITIAL_POSITION);
  const [hasPermission, setHasPermission] = useState(false);
  const [devs, setDevs] = useState<Dev[]>([]);
  const [techs, setTechs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentPosition(oldState => ({ ...oldState, latitude, longitude }));
        setHasPermission(true);
      }
    }

    loadInitialPosition();
  }, []);

  async function loadDevs() {
    if (!techs) return;

    const { latitude, longitude } = currentPosition;
    Keyboard.dismiss();
    setLoading(true);

    const response = await api.get<Dev[]>('/search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });

    setLoading(false);
    setDevs(response.data);
  }

  if (!hasPermission) {
    return null;
  }

  return (
    <>
      <SearchForm>
        <SearchInput
          editable={!loading}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          returnKeyType="send"
          onSubmitEditing={loadDevs}
          autoCorrect={false}
          onChangeText={setTechs}
          value={techs}
          autoFocus
        />

        <SearchButton onPress={loadDevs} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <MaterialIcons name="my-location" size={20} color="#FFF" />
          )}
        </SearchButton>
      </SearchForm>

      <MapContainer
        initialRegion={currentPosition}
        onRegionChangeComplete={setCurrentPosition}
      >
        {devs.map(dev => (
          <MapMarker key={dev._id} navigation={navigation} data={dev} />
        ))}
      </MapContainer>
    </>
  );
};

export default MainScreen;
