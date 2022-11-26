// Routes to the version 1 API
import express from 'express';

const routerV1 = express.Router();

// ---- HTTP Methods ----

// GET Method to get all cards
routerV1.get('/', (req, res) => {
  res.send('This is the v1');
});
// GET Method to get one card
routerV1.get('/', (req, res) => {});
// POST Method to create a new card
routerV1.post('/', (req, res) => {});
// DELETE Method to delete a card
routerV1.delete('/', (req, res) => {});

export { routerV1 };
