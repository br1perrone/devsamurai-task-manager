require('dotenv-safe').config({allowEmptyValues:true});
import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express';

// ENVIROMENT CONFIG
const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 5000;


AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJSExpress.buildRouter( adminJS );


app.use(adminJS.options.rootPaht, router);
app.listen(port, ()=>{
    console.log(`AdminJS is under ${host}:${port}/admin`);
});