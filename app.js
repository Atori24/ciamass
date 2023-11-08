//Llamado de express para ser utilizado como dependencia
const express = require('express');
const app = express();

//Llamado de ejs para ser utilizado como dependencia

app.set('view engine', 'ejs');
app.use('/', require('./router'));

//Aqui configuramos el server que utilizaremos momentariamente como localhost
app.listen(5000, ()=>{
    console.log('server corriendo en http://localhost:5000/index');
    
});