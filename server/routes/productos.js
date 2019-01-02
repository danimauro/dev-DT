const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Funciones globales para el manejo de archivos e imagenes
const {
    getNomArhivoAndExtension,
    validarExtension,
    moverArchivo,
    borrarArchivo
} = require('../general-functions/managment-files.js');

//extensiones permitidas para las imagenes y archivos
const extValidasImg = ['png', 'jpg', 'jpeg'];

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
        const prodDB = await require('../models').Producto.findAll({
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

/*==============
* Registrar un Producto
* Esta funcion permite el registro de un producto en la base de datos
* Return: Mensaje de confirmacion del registro
================*/

app.post('/admin/add/producto', async(req, res) => {

    let body = req.body;

    // Validar si se envió una imagen
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            message: 'No hay cargada ninguna imagen'
        });
    }
    //archivo físico (Fot_Ruta)
    let Fot_Ruta = req.files.Fot_Ruta;

    try {

        //Se registra el producto en la base de datos
        const productoDB = await require('../models').Producto.create({

            Dis_Cod: body.Dis_Cod,
            Pro_Nombre: body.Pro_Nombre,
            Pro_Tipo: body.Pro_Tipo.trim(),
            Pro_Marca: body.Pro_Marca,
            Pro_Descrip: body.Pro_Descrip.trim(),
            Pro_Ancho: body.Pro_Ancho,
            Pro_Perfil: body.Pro_Perfil,
            Pro_Rin: body.Pro_Rin,
            Pro_Peso: body.Pro_Peso,
            Pro_Valor_Compra: body.Pro_Valor_Compra,
            Pro_Valor_Venta: body.Pro_Valor_Venta,
            Pro_Valor_Mostrar: body.Pro_Valor_Mostrar,
            Pro_Valor_Porcen: body.Pro_Valor_Porcen,
            Usu_Cod: body.Usu_Cod

        });

        // Se valida si el producto fue registrado para registrarle la imagen correspondiente
        if (productoDB.length > 0) {
            return res.status(500).json({
                ok: false,
                message: 'Error al registrar un producto, favor comunicarse con el administrador'
            });
        }

        //se obtiene el nombre del archivo y la extension en un JSON
        const nomImagenExt = await getNomArhivoAndExtension(Fot_Ruta);
        // Se validan las extensiones de los archivos
        let resExtImg = await validarExtension(extValidasImg, nomImagenExt.ext);
        // Si la respuesta no es true se sale del sistema informando las extensiones válidas
        if (resExtImg !== true) {

            return res.status(400).json({
                ok: false,
                message: resExtImg
            });

        }
        //Si la imagen se guarda correctamente
        const fotoDB = await require('../models').Foto.create({
            Pro_Cod: productoDB.Pro_Cod,
            Fot_Ruta: nomImagenExt.nombre.trim(),
            Usu_Cod: productoDB.Usu_Cod
        });

        if (fotoDB.length == 0) {
            //Si no se crea el registro de una foto en la base de datos, se procede a borrar el registro de producto
            await productoDB.destroy();

            return res.status(500).json({
                ok: false,
                message: 'Error al registrar un producto, favor comunicarse con el administrador'
            });

        }
        //Se envian las imanges a las rutas correspondientes de las carpetas en el servidor
        let resImg = await moverArchivo(Fot_Ruta, nomImagenExt.nombre, 'productos');
        if (resImg == false) {

            //Si se presenta algun error al guardar la imagen en el servidor el sistema borra de la base de datos el registro anterior
            await fotoDB.destroy();
            await productoDB.destroy();

            return res.status(500).json({
                ok: false,
                message: 'Error al guardar la imágen, favor comunicarse con el administrador'
            });
        }

        return res.status(200).json({
            ok: true,
            message: 'Producto registrado correctamente'
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            message: 'Error Interno: ' + error
        });
    }
});

module.exports = app;