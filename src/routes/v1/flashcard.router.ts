// Routes to the version 1 API
import express from 'express';

import { EnglishCards } from '../../services/englishCards.services';
import {
  englishWordSchema,
  idSchema,
  spanishWordSchema,
} from '../../schemas/flashcard.schema';

const routerV1 = express.Router();
const englishCards: EnglishCards = new EnglishCards();

// ---- HTTP Methods ----

// Route: /api/v1...

// GET Method to get all cards
routerV1.get('/flashcards', async (req, res) => {
  const flashcards = await englishCards.getAllCards();
  res.status(200).json({
    ok: true,
    body: flashcards,
  });
});
// GET Method to get one card
routerV1.get('/flashcards/:id', async (req, res) => {
  const cardId = req.params.id;
  const validation = idSchema.validate(cardId);
  try {
    if (validation.error !== undefined) {
      res.status(404).json({
        message: 'Item not Found',
        ok: false,
        status: 404,
      });
    }
    const flashcard = await englishCards.getOnceCard(cardId);
    if (flashcard.length === 0)
      res.status(404).json({
        ok: false,
        message: 'Item not Found',
        status: 404,
      });
    res.status(200).json(flashcard);
  } catch (err) {
    console.error(err);
  }
});
// POST Method to create a new card
routerV1.post('/flashcards', async (req, res) => {
  const { englishWord, spanishWord } = req.body;
  const validationEnglishWord = englishWordSchema.validate(englishWord);
  const validationSpanishWord = spanishWordSchema.validate(spanishWord);
  try {
    if (
      validationEnglishWord.error !== undefined ||
      validationSpanishWord.error !== undefined
    ) {
      res.status(400).json({
        ok: false,
        message: 'Data Invalided',
        status: 400,
      });
    } else {
      const response = await englishCards.createCard(englishWord, spanishWord);
      res.status(201).json(response);
    }
  } catch (err) {
    console.error(err);
  }
});
// DELETE Method to delete a card
routerV1.delete('/flashcards/:id', async (req, res) => {
  const cardId: string = req.params.id;
  const idValidator = idSchema.validate(cardId);
  try {
    if (idValidator.error !== undefined) {
      res.status(400).json({
        ok: false,
        message: 'Invalided Id',
        status: 400,
      });
    } else {
      const cardsRemoved: number = await englishCards.deleteCard(cardId);
      if (cardsRemoved === 0) {
        res.status(404).json({
          ok: false,
          message: 'Item not Found',
          status: 404,
        });
      } else {
        res.status(204).json(cardsRemoved);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

export { routerV1 };
