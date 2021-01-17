const express = require('express');
const commerceRoutes = require('./src/routes/commerces');
const app = express();

//middlewares
app.use(express.json());

//routes
app.use('/commerces/', commerceRoutes);

module.exports = app;