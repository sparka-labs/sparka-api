const express = require('express');
const router = express.Router();
const tradeController = require('./../controllers/trade.controllers');
const { validateTrade, handleValidationErrors} = require('./../validators/trade.validators');
// Define the price route
router.post('/price',validateTrade,handleValidationErrors,tradeController.getPrice);

module.exports = router;