import { DataBaseConnection } from '../classes/dataBaseConnection.class';

// This class has all operations to work with the english cards data on the database
class EnglishCards extends DataBaseConnection {
  // singleton pattern
  private static instanceEnglishCards: EnglishCards | null = null;

  private constructor() {
    super();
  }

  public static newConnection() {
    if(this.instanceEnglishCards === null) {
      this.instanceEnglishCards = new EnglishCards();
      return this.instanceEnglishCards;
    }
    return this.instanceEnglishCards;
  }
  // Created a new card
  public createCard(word: string) {} // Remember to declare a type to the methods
  // Get all cards and return them
  public getAllCards() {
    this.isConnected();
  }
  // Get one card and return it
  public getOnceCard() {}
  // Delete one card
  public deleteCard() {}
}

export { EnglishCards };
