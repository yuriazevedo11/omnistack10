import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import AppContainer from './src/routes/AppContainer';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <AppContainer />
  </>
);

export default App;
