const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
//Variables de entorno o configuraciones globales
require('./config/private-configuration');

//default options
app.use(fileUpload());

//habilitar la carpeta public para que se pueda acceder externamente
app.use(express.static(path.resolve(__dirname, '../public')));

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse aplication/json
app.use(bodyParser.json());

//rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto: ", process.env.PORT);
});