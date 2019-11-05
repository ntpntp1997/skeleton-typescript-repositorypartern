import DataAccess from '../../config/dataAccess/DataAccess';
import IUserModel = require("../interfaces/userModel");
import Constants from '../../config/constants/Constants';

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

  static get Schema (): any {
       var schema = mongoose.Schema = {
        email: { type: String, required: true, unique: true },
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        phone: { type: String, default: null},
        address: { type: String, default: null},
        avatar: { type: String, default: null},
        role: [],
        permiss: [],
        createAt: { type: Number, default: Date.now},
        updateAt: { type: Number, default: null},
        deleteAt: { type: Number, default: null},
       };

       return schema;
   }

}
var schema = mongooseConnection.model<IUserModel>("User", UserSchema.Schema);
export = schema;