import express, { Router } from 'express';
import { DataAccess } from './config/dataAccess/DataAccess';
import Constants from './config/constants/Constants';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import IRouterAPI from './routes/apiRouter';

export class App {
  public app: express.Application;
  public port: string;
  private route: IRouterAPI;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(port: string) {
    this.app = express();
    this.port = port;
    this.route = new IRouterAPI();
    this.initializeMiddlewares();
    this.router();
    // this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
  public router() {
    this.route.initRoutesApi(this.app);
  }
  public listen() {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
dotenv.config()

const port = process.env.APP_PORT || '3000';
const app = new App(port);
try {
    const db = new DataAccess(new Constants());
    db.connect();
} catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error)
}

app.router()

app.listen()