import { model, Schema, Document } from 'mongoose';

import PointSchema, { Point } from './utils/PointSchema';

interface Dev extends Document {
  name?: string;
  bio?: string;
  avatar_url?: string;
  github_username?: string;
  techs?: string[];
  location: Point;
}

const DevSchema = new Schema({
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

export default model<Dev>('Dev', DevSchema);
