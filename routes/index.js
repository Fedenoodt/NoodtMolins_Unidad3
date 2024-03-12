var express = require("express");
var router = express.Router();

const productosController = require("../controllers/productsController");

/* GET users listing. */
//GET - Retornar datos
router.get("/", productosController.getAll);

//GET - Retornar datos
router.get("/:id", productosController.getById);

//POST - Crear
router.post("/", productosController.create);

//PUT - Actualizar
router.put("/:id", productosController.update);

//DELETE - Eliminar
router.delete("/:id", productosController.remove);

module.exports = router;