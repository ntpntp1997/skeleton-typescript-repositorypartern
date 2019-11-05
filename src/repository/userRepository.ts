import UserModel = require("./../models/userModel");
import IHeroModel = require("./../models/interfaces/userModel");
import UserSchema = require("./../models/schemas/userSchema");
import RepositoryBase = require("./base/baseRepository");

export class UserRepository  extends RepositoryBase<IHeroModel> {
    constructor () {
        super(UserSchema);
    }
}

Object.seal(UserRepository);