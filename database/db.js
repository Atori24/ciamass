const mysql= require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ciamas'
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de la conexion es:'+error);
        return
    }
    console.log('Conectado ala BD de Mysql')
})

module.exports = conexion;