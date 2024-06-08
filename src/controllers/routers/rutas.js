const express = require('express');
const router = express.Router();
const userController = require('../../controllers/crear');  


// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);

// Ruta de prueba para verificar que el servidor está funcionando
router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
