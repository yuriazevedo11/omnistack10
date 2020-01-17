import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  public middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  public database(): void {
    mongoose.connect(
      'mongodb+srv://master:admin@cluster0-vur0v.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
