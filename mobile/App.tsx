import React from 'react';
import { StatusBar } from 'react-native';

import AppContainer from './src/routes/AppContainer';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <AppContainer />
  </>
);

export default App;
