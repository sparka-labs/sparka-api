const axios = require('axios');
const config = require('./../config/index');



exports.getPrice = async (sellToken, buyToken, sellAmount, network) => {
  try {
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
  
    const response = await axios.get(apiUrl, { params, headers });
    const filteredSources = response.data.sources.filter(source => parseFloat(source.proportion) > 0);
    return {
      ...response.data,
      sources: filteredSources
    };
  } catch(error) {
    console.error('API Request Failed:', error);
    throw error;
  }
  
};
