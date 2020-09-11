const express = require('express');
const router = express.Router();

const polizaController = require('../controllers/polizaController');
const poliza = require('../models/poliza');

//Crear Polizas
router.post('/polizas/agregar', polizaController.createPoliza)

router.post('/polizas/buscar', polizaController.getLastNroPropuesta)

//listar Polizas
router.get('/', polizaController.getPolizas)

//buscar 1 poliza
router.get('/polizas/:id', polizaController.getPoliza)

//Modificar 1 poliza
router.put('/polizas/modificar/:id', polizaController.editPoliza)

//Incorporar
router.put('/polizas/incorporar/:id', polizaController.incPoliza)

//Excluir
router.put('polizas/excluir/:id', polizaController.excPoliza)

//Anular 1 poliza
router.put('polizas/anular/:id', polizaController.anuPoliza)

//Cancelar 1 poliza
router.put('polizas/cancelar/:id', polizaController.canPoliza)

//Historial de modificaciones de poliza
//router.get('polizas/historial/:id', polizaController.hisPoliza)

module.exports = router;