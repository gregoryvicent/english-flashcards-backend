import { Sequelize, Dialect } from 'sequelize';

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from '../config/db.config';

// This class "DataBaseConnection" is responsible for making the connection to the database
abstract class DataBaseConnection {
  private dbName: string = <string>DB_NAME;
  private dbUser: string = <string>DB_USER;
  private dbHost: string = <string>DB_HOST;
  private dbPassword: string = <string>DB_PASSWORD;
  private dbPort: number = parseInt(<string>DB_PORT);
  private dbType: Dialect = 'mysql';
  private sequelize: Sequelize;

  constructor() {
    // Here We use sequelize as ORM
    this.sequelize = new Sequelize(this.dbName, this.dbUser, this.dbPassword, {
      host: this.dbHost,
      dialect: this.dbType,
      port: this.dbPort,
    });
  }
  // This method is just to connection test to the database
  async isConnected() {
    try {
      if (this.sequelize === undefined)
        throw new Error('Sequelize is undefined');
      await this.sequelize.authenticate();
      console.info('All Fine !!!!!');
    } catch (err) {
      console.info('Bad Connection !!!!!');
      console.error(err);
    }
  }

  createModel() {
    return this.sequelize;
  }
}

export { DataBaseConnection };
