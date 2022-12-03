import { DataBaseConnection } from '../classes/dataBaseConnection.class';
import { DataTypes } from 'sequelize';

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

const flashcard = new FlashCardModel();
const Flashcard = flashcard.createModel();

export { Flashcard };
