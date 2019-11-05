import * as express from 'express';
const router = express.Router();

export default class AuthRouter {
    constructor() {
        
    }

    get routes () {
        router.post('/login', (req, res) => {
            return res.json('dan nhap'); 
        })
        router.post('/register', (req, res) => {
            return res.json('dan ky'); 
        })
        
        return router;
    }
}