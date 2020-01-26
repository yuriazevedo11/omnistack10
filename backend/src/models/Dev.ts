import { model, Schema, Document } from 'mongoose';

import PointSchema, { Point } from './utils/PointSchema';

export interface Dev {
  name?: string;
  bio?: string;
  avatar_url?: string;
  github_username?: string;
  techs?: string[];
  location: Point;
}

type DevModel = Document & Dev;

const DevSchema = new Schema<Dev>({
  name: String,
  bio: String,
  avatar_url: String,
  github_username: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

export default model<DevModel>('Dev', DevSchema);
