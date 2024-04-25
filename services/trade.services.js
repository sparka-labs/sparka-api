const axios = require('axios');

exports.getPrice = (sellToken, buyToken, sellAmount) => {
  const apiKey = process.env.API_KEY;
  const params = {
    sellToken,
    buyToken,
    sellAmount
  };
  const headers = {
    "0x-api-key" : apiKey,
  };

  return axios.get(process.env.API_URL, { params, headers })
    .then(response => {
      return response.data.sources.filter(source => parseFloat(source.proportion) > 0);
    });
};
