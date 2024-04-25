const axios = require('axios');
const config = require('./../config/index');



exports.getPrice = (sellToken, buyToken, sellAmount, network) => {

  const apiKey = config.apiKey;
  const apiUrl = config.apiUrls[network] + 'swap/v1/price';
 
  const params = {
    sellToken,
    buyToken,
    sellAmount
  };

  const headers = {
    "0x-api-key" : apiKey,
  };

  return axios.get(apiUrl, { params, headers })
    .then(response => {
      //return response.data.sources.filter(source => parseFloat(source.proportion) > 0);
      return response.data;
    });
};
