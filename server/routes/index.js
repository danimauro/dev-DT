const express = require('express');
const app = express();

app.use(require('./productos'));
app.use(require('./distribuidor'));

module.exports = app;