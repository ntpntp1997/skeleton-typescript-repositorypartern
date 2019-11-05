import session from "express-session";
import connectMongo from 'connect-mongo';


import mongoose from "mongoose";

export default class Session {
    constructor() {
        
    }
    public config(app) {
        const MongoStore = connectMongo(session);
        /**
         * this variable is where save session , in this case mongodb
         */
        let sessionStore = new MongoStore({
            mongooseConnection: mongoose.connection,
            autoReconnect: true,
            // autoRemove: "native"
        });

        /**
         * config session for app
         * @param app from express module
         */
        let config = (app) => {
            app.use(session({
                secret: process.env.APP_SECRET,
                store: sessionStore,
                resave: true,
                saveUninitialized: false,
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24 // 86640000 sec = 1 day
                }
            }));
        };
        return config;
    }
}