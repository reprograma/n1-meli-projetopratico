const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nome/buscar", controller.getByNomeColaborador)
router.get("/concluidos/filtrar", controller.getConcluidos)
router.get("/data/filtrar", controller.getMaisRecentes)
router.get("/dias/filtrar", controller.getDiferencaDias)

module.exports = router
