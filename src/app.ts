import express, { Router } from 'express';
import DataAccess  from './config/dataAccess/DataAccess';
import Constants from './config/constants/Constants';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import IRouterAPI from './routes/apiRouter';
import Middlewares from './middleware/base/MiddlewaresBase';
import passPort from 'passport'
export class App {
  public app: express.Application;
  public port: string;
  private route: IRouterAPI;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(port: string) {
    this.app = express();
    this.port = port;
  }
  public initConfigAll() {
    // config passportjs
    this.app.use(passPort.initialize());
    this.app.use(passPort.session());
  }
  public router() {
    this.app.use(Middlewares.configuration);
  }
  public listen() {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server đang hoạt động tại port ${this.port}`);
    });
  }
}