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
router.put('/:id', polizaController.enviada)

//buscar 1 poliza
router.get('/polizas/editar/:id', polizaController.getPoliza)

//EditarW 1 poliza
router.put('/polizas/editar/:id', polizaController.editPoliza)

//Endosos
router.post('/polizas/editar', polizaController.incPoliza)

//Anular 1 poliza
router.put('/polizas', polizaController.anuPoliza)

//Cancelar 1 poliza
router.put('/polizas', polizaController.canPoliza)

//Historial de modificaciones de poliza
//router.get('polizas/historial/:id', polizaController.hisPoliza)



module.exports = router;