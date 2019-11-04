import express, { Router } from 'express';
import { DataAccess } from './config/dataAccess/DataAccess';
import Constants from './config/constants/Constants';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import IRouterAPI from './routes/apiRouter';
 
export class App {
  public app: express.Application;
  public port: number;
  private route: IRouterAPI;
  constructor(port) {
    this.app = express();
    this.port = port;
    this.route = new IRouterAPI;
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
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
dotenv.config()

const port = process.env.APP_PORT;
const app = new App(port);
try {
    let db = new DataAccess(new Constants());
    db.connect();
} catch (error) {
    console.log(error)
}

app.router()

app.listen()