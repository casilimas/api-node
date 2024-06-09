const express = require('express');
const router = express.Router();
const userController = require('../crear'); 
const { modificarUsuario } = require('../editar');
const { listarUsuarios } = require('../listar');

// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);
router.put('/api/modificar/:id', modificarUsuario);
router.get('/api/listar', listarUsuarios);




module.exports = router;
