const express = require('express');
const app = express();

app.post('/request/pedido', async(req, res) => {

    let body = req.body;

    return res.status(200).json({
        ok: true,
        message: 'Entra pedido'
    });

});

/*
 * Traer el detalle de un pedido por medio del codigo
 */

app.get('/get/pedido/:cod', async(req, res) => {

    const pedidoDB = await require('../models').Pedido.findAll({
        include: [{
            model: require('../models').Detalle_Pedido,
            attributes: ['Ped_Cod', 'Pro_Cod', 'Dp_Cant', 'Dp_ValorCompra', 'Dp_ValorVenta', 'Dp_ValorMostrar'],
            where: { Ped_Cod: req.params.cod }
        }],
        where: { Ped_Cod: req.params.cod }
    });

    return res.status(200).json({
        ok: true,
        pedidoDB
    });

});

module.exports = app;