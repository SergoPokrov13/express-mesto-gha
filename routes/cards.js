const express = require('express');
const {
  createCard,
  deleteCard,
  getCards,
  getCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const cardRoutes = express.Router();

cardRoutes.delete('/:id', deleteCard);
cardRoutes.post('/', express.json(), createCard);
cardRoutes.get('/', getCards);
cardRoutes.get('/:id', getCardById);
cardRoutes.put('/:cardId/likes', express.json(), likeCard);
cardRoutes.delete('/:cardId/likes', express.json(), dislikeCard);

module.exports = cardRoutes;
