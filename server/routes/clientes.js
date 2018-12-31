const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const Cliente = require('../models').Cliente;

/*==============
* Registrar Cliente
================*/
app.post('/add/cliente', async(req, res) => {

    //Se toman los datos por medio del POST
    let body = req.body;

    try {

        // Se crea el cliente en la base de datos por medio del modelo Cliente
        await Cliente.create({

            Cli_Usuario: body.Cli_Usuario,
            Cli_Clave: bcrypt.hashSync(body.Cli_Clave, 10),
            Cli_Nombre: body.Cli_Nombre,
            Cli_Apellido: body.Cli_Apellido,
            Cli_Telefono: body.Cli_Telefono,
            Cli_Correo: body.Cli_Correo,
            Cli_Estado: true

        });

        return res.status(200).json({
            ok: true,
            message: 'Registro exitoso!'
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            message: 'Error Interno: ' + error
        });

    }

});

module.exports = app;