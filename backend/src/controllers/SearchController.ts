import { Request, Response } from 'express';
import * as Yup from 'yup';

import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

interface GetSearch {
  latitude: number;
  longitude: number;
  techs: string;
}

class SearchController {
  public async index(req: Request, res: Response) {
    const schema = Yup.object().shape({
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      techs: Yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      const yupError: Yup.ValidationError = err;
      const errors = yupError.inner.map(e => e.message);
      return res.status(400).json({ errors });
    }

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
