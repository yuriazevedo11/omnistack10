import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { setupWebsocket } from './websocket';
import routes from './routes';

class App {
  public express: express.Application;

  public server: http.Server;

  public constructor() {
    this.express = express();
    this.server = new http.Server(this.express);
    setupWebsocket(this.server);

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
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().server;
