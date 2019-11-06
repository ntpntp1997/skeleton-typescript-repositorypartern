import BaseBusiness = require("./base/BaseBusiness");
import IUserModel = require("../../models/interfaces/userModel");

interface UserBusiness extends BaseBusiness<IUserModel> {}
export = UserBusiness;
