// Here handle the routes for the home address
import express from 'express';

const routerRoot = express.Router();

// Get Method to get home data
routerRoot.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to English Flashcards API :D',
    status: 200
  });
});

export { routerRoot };
