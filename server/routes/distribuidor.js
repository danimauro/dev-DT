const express = require('express');
const app = express();
const Distribuidor = require('../models').Distribuidor;

/*==============
* Traer Distribuidores con los productos relacionados
================*/
app.get('/admin/get/distri-productos', (req, res) => {

    Distribuidor.findAll({
        include: [{
            model: require('../models').Producto,
            attributes: ['Pro_Cod', 'Pro_Nombre', 'Pro_Tipo', 'Pro_marca', 'Pro_Descrip']
        }],
    }).then(distriDB => {
        return res.status(200).json({
            ok: true,
            distriDB
        });
    });

});

/*==============
* Trae un listado de distribuidores
================*/
app.get('/distribuidores', (req, res) => {

    Distribuidor.findAll({
        attributes: ['Dis_Cod', 'Dis_Nombre', 'Dis_ID', 'Dis_Telefono', 'Dis_Direccion', 'Dis_Contacto', 'Dis_TelContacto', 'Dis_CorreoContacto']
    }).then(distriDB => {
        return res.status(200).json({
            ok: true,
            distriDB
        });
    });

});

/*==============
* Trae un distribuidor ubicado por codigo
================*/
app.get('/distribuidor/:cod', (req, res) => {

    Distribuidor.findAll({
        where: { Dis_Cod: req.params.cod }
    }).then(distriDB => {

        if (distriDB.length == 0) {
            return res.status(200).json({
                ok: true,
                message: 'No se encontro el distribuidor.'
            });
        }

        return res.status(200).json({
            ok: true,
            distriDB
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