const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config/index');
const tradeRoutes = require('./routes/trade.routes');


app.use(express.json());
app.use(morgan('combined', { stream: { write: message => config.logger.info(message.trim()) } }));

// Register Routes
app.use('/api/v1', tradeRoutes);


app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});