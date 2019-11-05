import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    _id: any;
    email: string
    firstName: string,
    lastName: string,
    username: string,
    passwork: string,
    phone: string,
    address: string,
    avatar: string,
    role: [],
    permiss: [],
    createAt: number,
    updateAt: number,
    deleteAt: number,
}

export = UserModel;