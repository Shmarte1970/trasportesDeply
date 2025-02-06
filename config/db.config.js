"use strict";
var mysql = require('mysql2');
require('dotenv').config();
var isProduction = process.env.NODE_ENV === 'production';
// Configuración para desarrollo (local)
var developmentConfig = {
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
// Configuración para producción (Azure)
var productionConfig = {
    host: process.env.AZURE_DB_HOST,
    user: process.env.AZURE_DB_USER,
    password: process.env.AZURE_DB_PASSWORD,
    database: process.env.AZURE_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true
    }
};
var pool = mysql.createPool(isProduction ? productionConfig : developmentConfig);
module.exports = pool.promise();
