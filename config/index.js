require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY,
    apiUrls: {
        ethereum: process.env.ETHEREUM_MAINNET_API_URL,
        arbitrum: process.env.ARBITRUM_API_URL,
        avalanche: process.env.AVALANCHE_API_URL,
        base: process.env.BASE_API_URL,
        bsc: process.env.BSC_API_URL,
        celo: process.env.CELO_API_URL,
        fantom: process.env.FANTOM_API_URL,
        optimism: process.env.OPTIMISM_API_URL,
        polygon: process.env.POLYGON_API_URL
    }
};