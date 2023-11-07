const express = require("express");
const router = express.Router();


router.get('/movil',(req, res)=>{
    res.render('movil.ejs')
})

router.get('/index',(req, res)=>{
    res.render('index.ejs')
})

router.get('/registro',(req, res)=>{
    res.render('registro.ejs')
})

module.exports = router;