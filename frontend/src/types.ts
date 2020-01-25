export interface NewDev {
  github_username: string;
  techs: string;
  latitude: string;
  longitude: string;
}

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
