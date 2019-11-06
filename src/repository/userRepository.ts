import UserModel = require("./../models/userModel");
import IUserModel = require("./../models/interfaces/userModel");
import UserSchema = require("./../models/schemas/userSchema");
import RepositoryBase = require("./base/baseRepository");

export class UserRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserSchema);
    }
}

Object.seal(UserRepository);