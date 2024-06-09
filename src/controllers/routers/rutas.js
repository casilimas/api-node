const express = require('express');
const router = express.Router();
const userController = require('../crear'); 
const { modificarUsuario } = require('../editar');
const { listarUsuarios } = require('../listar');
const { borrarUsuario } = require('../borrar');

// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);
router.put('/api/modificar/:id', modificarUsuario);
router.get('/api/listar', listarUsuarios);
router.delete('/api/borrar/:id', borrarUsuario);




module.exports = router;
