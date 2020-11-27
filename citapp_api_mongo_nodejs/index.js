import express from 'express';import mongoose from 'mongoose';
import app from './app';
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://http://localhost/Momento2_Aplicativos_Moviles/citas_php/login_api.php", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conection ");
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });

}).catch((error) =>{
    console.log(error);
})

