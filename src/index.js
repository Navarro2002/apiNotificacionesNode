require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/notificaciones', require('./routes/notificaciones.routes'));

// Variables de entorno con fallback
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4001;
const APP_ENV = process.env.APP_ENV || 'production';
const APP_DEBUG = process.env.APP_DEBUG === 'true';

// Inicio del servidor
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}/`);
  console.log(`Modo: ${APP_ENV} - Debug: ${APP_DEBUG}`);
});
