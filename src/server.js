require('dotenv-safe').config({allowEmptyValues:true});
import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express';

import locale from './locales';
import theme from './theme';

import UsersResource from './resources/UsersResource';
import ProjectsResource from './resources/ProjectsResource';

// ENVIROMENT CONFIG
const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 5000;


AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    dashboard: {
        component: AdminJS.bundle("./components/Dashboard/index"),
    },
    branding: {
        companyName: process.env.COMPANY_NAME,
        softwareBrothers: false,
        theme,
    },
    ...locale,
    resources: [UsersResource, ProjectsResource, ]
});

const router = AdminJSExpress.buildRouter( adminJS );


app.use(adminJS.options.rootPaht, router);
app.listen(port, ()=>{
    console.log(`AdminJS is under ${host}:${port}/admin`);
});