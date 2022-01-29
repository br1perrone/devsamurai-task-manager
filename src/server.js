require('dotenv-safe').config();

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';

// ENVIROMENT CONFIG
const port = process.env.PORT || 5000;


const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJSExpress.buildRouter( adminJS );


app.use(adminJS.options.rootPaht, router);
app.listen(port, ()=>{
    console.log(`AdminJS is under http://localhost:${port}/admin`);
});