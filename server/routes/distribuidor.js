const express = require('express');
const app = express();
const Distribuidor = require('../models').Distribuidor;

/*==============
* Traer Distribuidor
================*/
app.get('/distribuidor', (req, res) => {

    Distribuidor.findAll({
        include: [{
            model: require('../models').Producto,
            attributes: ['Pro_Cod', 'Pro_Nombre', 'Pro_Tipo', 'Pro_marca', 'Pro_Descrip']
        }],
    }).then(distri => {
        return res.status(200).json({
            ok: true,
            distri
        });
    });

});

/*==============
* Registrar Distribuidor
================*/

app.post('/admin/add/distribuidor', async(req, res) => {

    //Se toman los datos por medio del POST
    let body = req.body;

    try {

        const distribuidor = await Distribuidor.create({

            Dis_Nombre: body.Dis_Nombre,
            Dis_ID: body.Dis_ID,
            Dis_Telefono: body.Dis_Telefono,
            Dis_Direccion: body.Dis_Direccion,
            Dis_Contacto: body.Dis_Contacto,
            Dis_TelContacto: body.Dis_TelContacto,
            Dis_CorreoContacto: body.Dis_CorreoContacto,
            Usu_Cod: body.Usu_Cod

        });

        return res.status(200).json({
            ok: true,
            distribuidor
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            error
        });

    }




});




module.exports = app;