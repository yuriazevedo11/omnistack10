import { Schema } from 'mongoose';

export interface Point {
  type: string;
  coordinates: number[];
}

const PointSchema = new Schema<Point>({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

export default PointSchema;
