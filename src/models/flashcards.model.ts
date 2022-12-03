import { DataTypes } from 'sequelize';

import { EnglishCards } from '../services/englishCards.services';

const englishCards = EnglishCards.newConnection();
const Flashcard = englishCards.createModel().define('Flashcard', {
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
  },
});

export { Flashcard };
