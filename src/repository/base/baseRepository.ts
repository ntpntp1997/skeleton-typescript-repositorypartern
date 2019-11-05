import IRead = require("./../interfaces/base/read");
import IWrite = require("./../interfaces/base/write");
import IUserModel = require("../../models/schemas/userSchema");

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: mongoose.Document[]) => void) {
        this._model.create(item, callback);

    }

    retrieve(callback: (error: any, result: mongoose.Document[]) => void) {
        this._model.find({}, callback)
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        // tslint:disable-next-line:object-literal-shorthand
        this._model.update({ _id: _id }, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    public findBy(type: string, value: string, callback: (error: any, result: T) => void) {
        this._model.findOne({type: value},callback);
    }


    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

export = RepositoryBase;