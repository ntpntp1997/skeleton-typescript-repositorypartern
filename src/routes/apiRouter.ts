import * as express from 'express';

export default class IRouterAPI {
    private router = express.Router();

    public initRoutesApi(app) {
        this.get('/',(req,res) => {
            return res.json({
                message: 'api work',
            })
        });
        return app.use('/api', this.router);
    }

    private get(path, controller) {
        return this.router.get(path, controller);
    }

    private post(path, controller) {
        return this.router.post(path, controller);
    }

    private put(path, controller){
        return this.router.put(path, controller);
    }

    private delete(path, controller){
        return this.router.delete(path, controller);
    }

    private patch(path, controller): any {
        return this.router.patch(path, controller);
    }

    private options(path, controller): any {
        return this.router.options(path, controller);
    }

    private head(path, controller): any {
        return this.router.head(path, controller);
    }

    private connect(path, controller): any {
        return this.router.connect(path, controller);
    }

    private trace(path, controller): any {
        return this.router.trace(path, controller);
    }
}