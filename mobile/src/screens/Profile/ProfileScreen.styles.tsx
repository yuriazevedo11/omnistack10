import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export const Container = styled(WebView)`
  flex: 1;
  justify-content: center;
`;

export const WebViewer = styled(WebView)`
  flex: 1;
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#7D40E7',
})`
  position: absolute;
  align-self: center;
  top: 50%;
`;
