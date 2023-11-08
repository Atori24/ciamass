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


router.get('/movil',(req, res)=>{
    res.render('movil.ejs')
})

router.get('/index',(req, res)=>{
    res.render('index.ejs')
})

router.get('/registro',(req, res)=>{
    res.render('registro.ejs')
})

router.get('/admin',(req, res)=>{
    res.render('admin.ejs')
})

module.exports = router;