const express = require('express');
const app = express();
const Producto = require('../models').Producto;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/*==============
* Buscar Productos
* Esta funcion busca productos por nombre,marca,ancho,perfil, y rin. 
* Return: Arreglo de JSON con todos los datos de un producto y las imagenes del mismo
================*/

app.get('/productos/buscar', async(req, res) => {

    // se defiene
    let nombre = req.query.nombre || "";
    let marca = req.query.marca || "";
    let ancho = req.query.ancho || "";
    let perfil = req.query.perfil || "";
    let rin = req.query.rin || "";

    try {

        //Se realiza la consulta a la base de datos por medio del modelo Producto
        const prodDB = await Producto.findAll({
            include: [{
                model: require('../models').Foto,
                attributes: ['Fot_Ruta']
            }],
            attributes: ['Pro_Cod', 'Pro_Nombre', 'Pro_Tipo', 'Pro_Marca', 'Pro_Descrip', 'Pro_Ancho', 'Pro_Perfil', 'Pro_Rin', 'Pro_Peso', 'Pro_Valor_Compra', 'Pro_Valor_Venta', 'Pro_Valor_Mostrar', 'Pro_Valor_Porcen'],
            where: {
                Pro_Nombre: {
                    [Op.like]: `%${nombre}%`
                },
                Pro_Marca: {
                    [Op.like]: `%${marca}%`
                },
                Pro_Ancho: {
                    [Op.like]: `%${ancho}%`
                },
                Pro_Perfil: {
                    [Op.like]: `%${perfil}%`
                },
                Pro_Rin: {
                    [Op.like]: `%${rin}%`
                },
            }
        });

        //Se configura el path de la imagen agregando el ubicación en el servidor antes de ser enviado al frontEnd
        for (let i = 0; i < prodDB.length; i++) {
            for (let y = 0; y < prodDB[i].Fotos.length; y++) {
                prodDB[i].Fotos[y].Fot_Ruta = `${ process.env.ROUTE_IMG_PRODUCTOS }${ prodDB[i].Fotos[y].Fot_Ruta }`
            }
        }

        // Se retorna el JSON de productos
        return res.status(200).json({
            ok: true,
            prodDB
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: `Error Interno: ${error}`
        });
    }

});

app.post('/admin/add/producto', async(req, res) => {
    return res.status(200).json({
        ok: true,
        message: 'Add Producto'
    });
});

module.exports = app;