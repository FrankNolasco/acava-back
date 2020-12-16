const { Router } = require("express");
const {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
} = require("../controllers/Trabajos.controller");
const routes = Router();

routes.get("/listar", listarTrabajos);
routes.get("/consultar/:idTrabajo", consultarTrabajo);
routes.post("/crear", crearTrabajo);
routes.post("/editar", editarTrabajo);
routes.post("/eliminar", eliminarTrabajo);

module.exports = routes;
