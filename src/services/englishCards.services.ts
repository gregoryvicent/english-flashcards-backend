import { Flashcard } from '../models/flashcards.model';

// This class has all operations to work with the english cards data on the database
class EnglishCards {
  // Created a new card
  public async createCard(word: string) {
    await Flashcard.sync()
    const newCard = await Flashcard.create({
      englishWord: 'Orange',
      spanishWord: 'Naranja',
    });
    return {
      message: 'success',
      model: newCard,
    };
  } // Remember to declare a type to the methods
  // Get all cards and return them
  public getAllCards() {}
  // Get one card and return it
  public getOnceCard() {}
  // Delete one card
  public deleteCard() {}
}

export { EnglishCards };
