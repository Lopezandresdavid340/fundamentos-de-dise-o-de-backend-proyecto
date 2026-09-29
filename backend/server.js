const app = require('./src/app');
const env = require('.src/config/env');
const seeAdmin = require('src/startup/seedAdmin');

async function start() {
    await seeAdmin();

    app.listen(env.PORT, () => {
        console.log(`Laboratorio API CRUD en ejecutandose en http://localhost:${env.PORT}`);
    });
}

start();
