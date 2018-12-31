const express = require('express');
const app = express();

app.use(require('./productos'));
app.use(require('./distribuidor'));
app.use(require('./clientes'));
app.use(require('./pedidos'));

module.exports = app;