//Llamado de MyQSL para implementar la base de datos que usaremos 
const mysql= require('mysql');

const conexion = mysql.createConnection({
    host: 'sql302.infinityfree.com',
    user: 'if0_35418244',
    password: 'D4EwutSBKMqLP6',
    database: 'if0_35418244_ciamas'
})

//Procederemos a colocar el comando para comprobar que la base de datos este funcionando 
conexion.connect((error)=>{
    if(error){
        console.error('El error de la conexion es:'+error);
        return
    }
    console.log('Conectado ala BD de Mysql')
})

module.exports = conexion;