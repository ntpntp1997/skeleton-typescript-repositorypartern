import dotenv from 'dotenv';
import express = require("express");
import Middlewares from './middleware/base/MiddlewaresBase';
import { App } from './app';

dotenv.config();
var port: string = process.env.APP_PORT || '3000';
var app = new App(port);    

app.router();
app.listen();