const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nome/buscar", controller.getByNomeColaborador)
router.get("/concluidos/filtrar", controller.getConcluidos)

module.exports = router
