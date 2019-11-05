import IBaseController from './interfaces/base/BaseController';
import { UserBusiness } from '../business/userBusiness';
export default class AuthController implements IBaseController <UserBusiness>{

    constructor() {
    }

    create(){}
    retrieve(){}
    findById(){}
    update(){}
    delete(){}
}