import { Flashcard } from '../models/flashcards.model';

// This class has all operations to work with the english cards data on the database
class EnglishCards {
  // Created a new card
  public async createCard(englishWord: string, spanishWord: string) {
    await Flashcard.sync();
    const newCard = await Flashcard.create({
      englishWord: englishWord,
      spanishWord: spanishWord,
    });
    return {
      message: 'success',
      model: newCard,
    };
  } // Remember to declare a type to the methods
  // Get all cards and return them
  public async getAllCards() {
    const allFlashcards = await Flashcard.findAll();
    return allFlashcards;
  }
  // Get one card and return it
  public async getOnceCard(cardId: string) {
    const oneFlashcard = await Flashcard.findAll({
      where: {
        id: cardId,
      },
    });
    return oneFlashcard;
  }
  // Delete one card
  public async deleteCard(cardId: string) {
    const deleteFlashcard = await Flashcard.destroy({
      where: {
        id: cardId,
      },
    });
    return deleteFlashcard;
  }
}

export { EnglishCards };
