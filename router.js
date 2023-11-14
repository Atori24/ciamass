const express = require("express");
const router = express.Router();

const conexion = require('./database/db');

router.get('/admin', (req, res)=>{
    conexion.query('SELECT * FROM usuario', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('admin.ejs',{results:results});
        }
})
})

router.get('/alerta',(req, res)=>{
    res.render('alerta.ejs') 
})

//Ruta par enlazar la vista de movil
router.get('/movil',(req, res)=>{
    res.render('movil.ejs')
})
//Ruta par enlazar la vista de la pagina principal
router.get('/',(req, res)=>{
    res.render('index.ejs')
})
//Ruta par editar registros de la base de datos
router.get('/editar',(req, res)=>{
    res.render('editar.ejs')
})
//Ruta par enlazar la vista de registros
router.get('/registro',(req, res)=>{
    res.render('registro.ejs')
})
//Ruta par enlazar la vista de administrasdor
router.get('/admin',(req, res)=>{
    res.render('admin.ejs') 
})
//Ruta para guardar los datos del registro del usuario
const datos = require('./controllers/datos');
router.post('/save', datos.save);
router.post('/update', datos.update);


//router para editar 
router.get('/editar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM usuario WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editar', {cia:results[0]});
        }

    })
})


//router para poder borrar
router.get('/borrar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM usuario WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/admin');
        }
    })
    })

// //Ruta par enlazar primera imagen NO FUNCIONO 
// router.get('/imagenes/ccciamas',(req, res)=>{
//     res.render('/ccciamas.jpeg')
// })

module.exports = router;