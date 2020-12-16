const { Router } = require("express");
const {
  listarPermisos,
  consultarPermiso,
  crearPermiso,
  editarPermiso,
  eliminarPermiso,
} = require("../controllers/Permiso.controller");
const routes = Router();

routes.get("/listar", listarPermisos);
routes.get("/consultar/:idPermiso", consultarPermiso);
routes.post("/crear", crearPermiso);
routes.post("/editar", editarPermiso);
routes.post("/eliminar", eliminarPermiso);

module.exports = routes;
