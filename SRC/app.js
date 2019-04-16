/* Requerimos las dependencias express */
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


const indexRoutes = require('./routes/index');



//conexion base de datos



//Configuraciones

app.set('port',process.env.PORT || 3000);

//Ruta de la carpeta publica de archivos estaticos
app.use(express.static(path.join(__dirname,'static')));

//Rutas de las vistas predeterminada
app.set('views', path.join(__dirname, 'views'));




//definir motor de plantilla
app.set('view engine', 'ejs');



//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));



//Routes
app.use('/', indexRoutes);


//Corriendo el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});




