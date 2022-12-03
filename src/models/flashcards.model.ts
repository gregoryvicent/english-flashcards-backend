// Model for the Flashcards table
import { DataBaseConnection } from '../classes/dataBaseConnection.class';
import { DataTypes } from 'sequelize';

// "FlashCardModel" inherits from "DataBaseConnection" to use the same database connection and It can use the property "this.sequelize".
class FlashCardModel extends DataBaseConnection {
  public createModel() {
    const Flashcard = this.sequelize.define('Flashcard', {
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
    });
    return Flashcard;
  }
}

// Here the class is instantiated to only export the "createModel()" method that contains what is necessary to work with this Flashcards model.
const flashcard = new FlashCardModel();
const Flashcard = flashcard.createModel();

export { Flashcard };
