// This class "DataBaseConnection" is responsible for making the connection to the database
abstract class DataBaseConnection {
  private dbName: string = <string>process.env.DB_NAME;
  private dbUser: string = <string>process.env.DB_USER;
  private dbPort: string = <string>process.env.DB_PORT;
  private dbHost: string = <string>process.env.DB_HOST;
  private dbPassword: string = <string>process.env.DB_PASSWORD;

  constructor() {
    // Data Base connection is here...
  }
}

export { DataBaseConnection };
