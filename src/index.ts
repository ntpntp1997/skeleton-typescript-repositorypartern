import dotenv from 'dotenv';
import { App } from './app';
import session from './config/sessions/session';

dotenv.config();
var port: string = process.env.APP_PORT || '3000';
var app = new App(port);    

app.router();
const sess = new session()
sess.config(app);
app.listen();