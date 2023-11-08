const conexion = require('../database/db');

exports.save = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const contacto = req.body.contacto;
    const celcontacto = req.body.celcontacto;
    const palaclave = req.body.palaclave;
    console.log(id+"--"+nombre+"--"+celular+"--"+contacto+"--"+celcontacto+"--"+palaclave)
    conexion.query('INSERT INTO usuario SET ?',{id:id, nombre:nombre, celular:celular, contacto:contacto, celcontacto:celcontacto, palaclave:palaclave},(error, results)=>{
        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}