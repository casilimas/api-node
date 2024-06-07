// src/routers/rutas.js

const express = require('express');
const router = express.Router();

// Definir tus rutas 
router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
