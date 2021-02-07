const express = require('express');
const commerceRoutes = require('./src/routes/commerces');
const commerceTypesRoutes = require('./src/routes/commerce_types');
const cors = require('cors');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

//middlewares
app.use(cors());
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(history());
//app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/commerces/', commerceRoutes);
app.use('/commercetypes/', commerceTypesRoutes);

module.exports = app;