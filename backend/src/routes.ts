import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  return res.json({ message: 'Hello Omnistack' });
});

export default routes;
