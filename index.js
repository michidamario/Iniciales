const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/iniciales", (req,res) =>{
    const array = req.body.nombres
    const iniciales = array.map(function(nombre){
       return nombre.charAt(0);
    });

    res.json(iniciales);
});

app.listen(3000, ()=>{
    console.log("Escuchando en el puerto 3000");
});