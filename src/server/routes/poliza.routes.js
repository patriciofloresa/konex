const express = require('express');
const router = express.Router();

const polizaController = require('../controllers/polizaController');
const poliza = require('../models/poliza');

//Crear Polizas
router.get('/polizas/agregar', polizaController.getLastNroPropuesta)
router.post('/polizas/agregar', polizaController.createPoliza)

//listar Polizas
router.get('/', polizaController.getPolizas)

//Descargar Poliza
router.get('/polizas/descargar/:id', polizaController.descPoliza)

//Cambiar Estado
router.get('/:id', polizaController.getPoliza)
router.put('/:id', polizaController.estado)

//buscar 1 poliza
router.get('/polizas/editar/:id', polizaController.getPoliza)

//EditarW 1 poliza
router.put('/polizas/editar/:id', polizaController.editPoliza)

module.exports = router;