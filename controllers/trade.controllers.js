const tradeService = require('./../services/trade.services');

exports.getPrice = (req, res) => {
    // Extract parameters from the request body
    const { sellToken, buyToken, sellAmount, network } = req.body;

    tradeService.getPrice(sellToken, buyToken, sellAmount, network)
    .then(activeDexs => res.json(activeDexs))
    .catch(error => {
        console.error('API Request Failed:', error);
        res.status(500).json({ error: error.message });
   });
};