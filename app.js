const express = require('express');
const router = require('./routes');

const app = express();

// Middleware global
app.use(express.json());

// FRONT CONTROLLER
app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});