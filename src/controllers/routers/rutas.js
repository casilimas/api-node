const express = require('express');
const router = express.Router();
const userController = require('../crear'); 
const { modificarUsuario } = require('../editar');
<<<<<<< HEAD
const { listarUsuarios } = require('../listar');
const { borrarUsuario } = require('../borrar');
const { buscarUsuario } = require('../buscar'); 
=======
>>>>>>> editar

// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);
router.put('/api/modificar/:id', modificarUsuario);
<<<<<<< HEAD
router.get('/api/listar', listarUsuarios);
router.delete('/api/borrar/:id', borrarUsuario);
router.get('/api/buscar/:id', buscarUsuario);
=======
>>>>>>> editar




module.exports = router;
