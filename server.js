"use strict";
const port = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

console.log('Environment variables:', {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
});

const app = express();
// Middleware
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors());
app.use(express.json());

// Servir archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Angular
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Manejo de errores
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
