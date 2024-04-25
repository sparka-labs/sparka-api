const express = require('express');
const app = express();
require('dotenv').config();
const tradeRoutes = require('./routes/trade.routes');


app.use(express.json());

// Register Routes
app.use('/api/v1', tradeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});