const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const port = 3000;

app.get('/api/v1/price', (req, res) => {
  // Define your API key here
const apiKey = process.env.API_KEY;

// Set up the request parameters
const params = {
  sellToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  buyToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
  sellAmount: '1000000000000000000'
};

// Set up the headers
const headers = {
    "0x-api-key" : apiKey,
};

// Perform the GET request
axios.get(process.env.API_URL, { params, headers })
  .then(response => {
    const activeDexs = response.data.sources.filter(source => parseFloat(source.proportion) > 0);
    res.json(activeDexs);
  })
  .catch(error => {
    console.error('API Request Failed:', error);
    res.json({ error: error.message });
  });
});



app.listen(port, () => { console.log('app runing on port 3000')});