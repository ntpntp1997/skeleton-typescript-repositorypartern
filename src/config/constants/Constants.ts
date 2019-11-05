  
class Constants {
    static DB_HOST: string = process.env.DB_HOST || '127.0.0.1';
    static DB_NAME: string = process.env.DB_NAME || 'social';
    static DB_PORT: string = process.env.DB_PORT || '27017';
    static DB_DRIVER: string = process.env.DB_DRIVER || 'mongodb';
    static DB_CONNECTION_STRING: string  = `${Constants.DB_DRIVER}://${Constants.DB_HOST}:${Constants.DB_PORT}/${Constants.DB_NAME}`; 
}
Object.seal(Constants);
export = Constants;