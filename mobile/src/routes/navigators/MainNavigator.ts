import { NavigationRouteConfigMap } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import Main from '../../screens/Main';
import Profile from '../../screens/Profile';

const screens: NavigationRouteConfigMap<
  NavigationStackOptions,
  NavigationStackProp
> = {
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'DevRadar',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Perfil no Github',
    },
  },
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerTintColor: '#FFF',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#7D40E7',
  },
};

const config = { defaultNavigationOptions };

export default createStackNavigator(screens, config);
