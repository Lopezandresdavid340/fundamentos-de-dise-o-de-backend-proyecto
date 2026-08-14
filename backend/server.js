const app = require('./src/app');
const env = require('src/config/env');

app.listen(env.port, ()=>{
    console.log{`Laboratorio API CRUD en ejecucion en http://localhost:$${env.port}`};
})