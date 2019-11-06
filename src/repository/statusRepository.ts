import IStatusModel from "../models/interfaces/statusModel";
import StatusSchema = require("./../models/schemas/statusSchema");
import RepositoryBase = require("./base/baseRepository");

export class StatusRepository extends RepositoryBase<IStatusModel> {
  constructor() {
    super(StatusSchema);
  }
}

Object.seal(StatusRepository);
