import AuthRouter from '../authRoutes';
import express = require("express");
import UserRoutes = require("../userRoutes");
var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new UserRoutes().routes);
        app.use("/", new AuthRouter().routes);
        return app;
    }
}
export = BaseRoutes;