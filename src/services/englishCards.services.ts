import { DataBaseConnection } from '../classes/dataBaseConnection.class';
import { Flashcard } from '../models/flashcards.model';

// This class has all operations to work with the english cards data on the database
class EnglishCards extends DataBaseConnection {
  // singleton pattern
  private static instanceEnglishCards: EnglishCards | null = null;

  private constructor() {
    super();
  }

  public static newConnection() {
    if (EnglishCards.instanceEnglishCards === null) {
      EnglishCards.instanceEnglishCards = new EnglishCards();
      return EnglishCards.instanceEnglishCards;
    }
    return EnglishCards.instanceEnglishCards;
  }
  // Created a new card
  public async createCard(word: string) {
    const newCard = await Flashcard.create({
      englishWord: 'Cat',
      spanishWord: 'Gato',
    });
    return {
      message: 'success',
      model: newCard
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
