const { checkSchema, validationResult } = require('express-validator');
const { isAddress } = require('web3-validator');

const tradeValidationSchema = {
  sellToken: {
    in: ['body'],
    errorMessage: 'Sell token must be a valid Ethereum address',
    custom: {
      options: (value) => isAddress(value),
    }
  },
  buyToken: {
    in: ['body'],
    errorMessage: 'Buy token must be a valid Ethereum address',
    custom: {
      options: (value) => isAddress(value),
    }
  },
  sellAmount: {
    in: ['body'],
    isInt: {
        options: { gt: 0 },
        errorMessage: 'Sell amount must be a positive integer'
    }
  }
};

exports.validateTrade = checkSchema(tradeValidationSchema);







exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
