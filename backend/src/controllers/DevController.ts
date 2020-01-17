import axios from 'axios';
import { Request, Response } from 'express';
import * as Yup from 'yup';

import Dev from '../models/Dev';
import { Point } from '../models/utils/PointSchema';
import { parseStringAsArray, validateRoutePayload } from '../utils';

interface StorePayload {
  github_username: string;
  techs: string;
  longitude: number;
  latitude: number;
}

class DevController {
  public async index(_req: Request, res: Response) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  public async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      techs: Yup.string().required(),
      github_username: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    const errors = await validateRoutePayload(schema, req);
    if (errors) return res.status(400).json({ errors });

    const {
      techs,
      github_username,
      longitude,
      latitude,
    }: StorePayload = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `http://api.github.com/users/${github_username}`
      );

      const { name, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location: Point = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        techs: techsArray,
        name,
        avatar_url,
        bio,
        location,
      });
    }

    return res.json(dev);
  }
}

export default new DevController();
