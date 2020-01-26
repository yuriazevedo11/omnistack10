import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const MapContainer = styled(MapView)`
  flex: 1;
`;

export const SearchForm = styled.View`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  elevation: 2,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 4,
    height: 4,
  },
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
`;

type SearchButton = {
  disabled?: boolean;
};

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  opacity: ${(props: SearchButton) => (props.disabled ? 0.8 : 1)};
`;
