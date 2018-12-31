const express = require('express');
const app = express();

app.post('/admin/add/pedidos', async(req, res) => {

    let body = req.body;

    return res.status(200).json({
        ok: true,
        message: 'Entra pedido'
    });

});

module.exports = app;