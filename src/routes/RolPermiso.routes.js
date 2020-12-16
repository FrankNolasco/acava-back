const { Router } = require("express");
const {
  listarRolPermisos,
  consultarRolPermiso,
  crearRolPermiso,
  editarRolPermiso,
  eliminarRolPermiso,
} = require("../controllers/RolPermiso.controller");
const routes = Router();

routes.get("/listar", listarRolPermisos);
routes.get("/consultar/:idRolPermiso", consultarRolPermiso);
routes.post("/crear", crearRolPermiso);
routes.post("/editar", editarRolPermiso);
routes.post("/eliminar", eliminarRolPermiso);

module.exports = routes;
