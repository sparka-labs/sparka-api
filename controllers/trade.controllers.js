const tradeService = require('./../services/trade.services');

exports.getPrice = (req, res) => {
    // Extract parameters from the request body
    const { sellToken, buyToken, sellAmount } = req.body;

    // Validate the parameters
    if (!sellToken || !buyToken || !sellAmount) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    tradeService.getPrice(sellToken, buyToken, sellAmount)
    .then(activeDexs => res.json(activeDexs))
    .catch(error => {
        console.error('API Request Failed:', error);
        res.status(500).json({ error: error.message });
   });
};