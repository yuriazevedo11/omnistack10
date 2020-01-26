import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export type Navigation = NavigationScreenProp<
  NavigationState,
  NavigationParams
>;

export interface Location {
  coordinates: number[];
  _id: string;
  type: string;
}

export interface Dev {
  techs: string[];
  _id: string;
  github_username: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: Location;
  __v: number;
}
