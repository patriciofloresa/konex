const express = require("express");
const router = express.Router();
const polizaController = require("../controllers/polizaController");
const upload = require("../controllers/upload");

//Nro Propuesta
router.get("/polizas/agregar", polizaController.getLastNroPropuesta)
//Crear Polizas
router.post("/polizas/agregar", upload.single("items"), polizaController.createPoliza)
//Editar 1 poliza
router.put("/polizas/editar/:id", upload.single("items"), polizaController.editPoliza)
//Crear Endoso
router.post("/polizas/editar", upload.single("items"), polizaController.endosoPoliza);
//listar Polizas
router.get("/", polizaController.getPolizas)
//Descargar Poliza
router.get("/polizas/descargar/:id", polizaController.descPoliza)
//Cambiar Estado
router.get("/:id", polizaController.getPoliza)
router.put("/:id", polizaController.estado)
//buscar 1 poliza
router.get("/polizas/editar/:id", polizaController.getPoliza)


module.exports = router;