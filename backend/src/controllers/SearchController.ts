import { Request, Response } from 'express';

import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

interface GetSearch {
  latitude: number;
  longitude: number;
  techs: string;
}

class SearchController {
  async index(req: Request, res: Response) {
    const { latitude, longitude, techs }: GetSearch = req.body;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(devs);
  }
}

export default new SearchController();
