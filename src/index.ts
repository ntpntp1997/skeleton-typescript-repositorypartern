import dotenv from 'dotenv';
import { App } from './app';
import Session from './config/sessions/session';




try {
    dotenv.config();
    const port: string = process.env.APP_PORT || '3000';
    const app = new App(port);    
    app.router();
    const session = new Session();

    session.config(app);

    app.initConfigAll();

    app.listen();
} catch (error) {
    console.log(error);
}
