const tradeService = require('./../services/trade.services');

exports.getPrice = async (req, res) => {
    try {
        // Extract parameters from the request body
        const { sellToken, buyToken, sellAmount, network } = req.body;
        const response = await tradeService.getPrice(sellToken, buyToken, sellAmount, network);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    

    
};