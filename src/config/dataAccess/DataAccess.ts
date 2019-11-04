import Mongoose from 'mongoose';
import Constants from '../constants/Constants';

export class DataAccess {
     mongooseInstance: any;
     mongooseConnection: Mongoose.Connection;
    constructor(private contants: Constants) {
        this.connect()
    }
    public connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            // tslint:disable-next-line:no-console
            console.log("Conected ao mongodb.");
        });

       this.mongooseInstance = Mongoose.connect(this.contants.getConnectionString() ,{
           useUnifiedTopology: true,
           useNewUrlParser: true
        });
       return this.mongooseInstance;
    }
}