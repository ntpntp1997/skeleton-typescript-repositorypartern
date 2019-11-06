import BaseBusiness = require("./base/BaseBusiness");
import IStatusModel = require("../../models/interfaces/statusModel");

interface StatusBusiness extends BaseBusiness<IStatusModel> {}
export = StatusBusiness;
