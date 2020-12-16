const { Router } = require("express");
const {
  listarEstados,
  consultarEstado,
  crearEstado,
  editarEstado,
} = require("../controllers/Estado.controller");
const routes = Router();

routes.get("/listar", listarEstados);
routes.get("/consultar/:idEstado", consultarEstado);
routes.post("/crear", crearEstado);
routes.post("/editar", editarEstado);

module.exports = routes;
