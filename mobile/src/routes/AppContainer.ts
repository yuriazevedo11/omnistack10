import { createAppContainer } from 'react-navigation';
import MainNavigator from './navigators/MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
