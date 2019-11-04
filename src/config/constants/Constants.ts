export default class Constants {
    private url: string = process.env.DB_HOST || "localhost";
    private databaseName: string = process.env.DB_NAME || "social-network";
    private dbDriver: string = process.env.DB_DRIVER || "DB_DRIVER";
    private DB_CONNECTION_STRING: string  = `${this.dbDriver}://${this.url}/${this.databaseName}`;

    /**
     * getConnectionString
     */
    public getConnectionString() {
        return this.DB_CONNECTION_STRING;
    }
}
Object.seal(Constants);