require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URL,
};