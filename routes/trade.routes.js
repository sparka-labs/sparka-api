const express = require('express');
const router = express.Router();
const tradeController = require('./../controllers/trade.controllers');

// Define the price route
router.post('/price', tradeController.getPrice);

module.exports = router;