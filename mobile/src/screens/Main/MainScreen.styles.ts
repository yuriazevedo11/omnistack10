import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const MapContainer = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border-width: 4px;
  border-color: #fff;
`;

export const DevInfo = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;
