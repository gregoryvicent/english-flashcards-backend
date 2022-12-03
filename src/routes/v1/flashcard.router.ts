// Routes to the version 1 API
import express from 'express';

import { EnglishCards } from '../../services/englishCards.services';

const routerV1 = express.Router();
const englishCards: EnglishCards = new EnglishCards();

// ---- HTTP Methods ----

// Route: /api/v1...

// GET Method to get all cards
routerV1.get('/flashcards', async (req, res) => {
  const flashcards = await englishCards.getAllCards();
  res.status(200).json(flashcards);
});
// GET Method to get one card
routerV1.get('/flashcards/:id', async (req, res) => {
  const cardId: string = req.params.id
  const flashcard = await englishCards.getOnceCard(cardId)
  res.status(200).json(flashcard)
});
// POST Method to create a new card
routerV1.post('/flashcards', async (req, res) => {
  const response = await englishCards.createCard('Island', 'Isla');
  res.status(201).json(response);
});
// DELETE Method to delete a card
routerV1.delete('/flashcards/:id', async (req, res) => {
  const cardId: string = req.params.id
  const flashcard: number = await englishCards.deleteCard(cardId)
  res.status(204).json(flashcard);
});

export { routerV1 };
