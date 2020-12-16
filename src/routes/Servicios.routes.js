const { Router } = require("express");
const {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
} = require("../controllers/servicios.controller");
const routes = Router();

routes.get("/listar", listarServicios);
routes.get("/consultar/:idServicio", consultarServicio);
routes.post("/crear", crearServicio);
routes.post("/editar", editarServicio);
routes.post("/eliminar", eliminarServicio);

module.exports = routes;
