// Model for the Flashcards table
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { DataBaseConnection } from '../classes/dataBaseConnection.class';

// We instance "DataBaseConnection" class to get the "sequelize" attribute.
const dataBaseConnection: DataBaseConnection = new DataBaseConnection();

// Here We Typing the Flashcard Model
class Flashcard extends Model<
  InferAttributes<Flashcard>,
  InferCreationAttributes<Flashcard>
> {
  declare englishWord: string;
  declare spanishWord: string;
  declare id: CreationOptional<string>;
  declare createdAt: CreationOptional<string>;
  declare updatedAt: CreationOptional<string>;
}

// Create Flashcard Model
Flashcard.init(
  {
    englishWord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spanishWord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: dataBaseConnection.sequelize, // Here We use the "sequelize" attribute.
    modelName: 'Flashcard',
  }
);

export { Flashcard };
