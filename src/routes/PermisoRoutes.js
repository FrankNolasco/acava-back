const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarPermisos,
  consultarPermiso,
  crearPermiso,
  editarPermiso,
  eliminarPermiso,
} = require("../controllers/PermisoController");
const routes = Router();

routes.get("/listar", VerificarRol , listarPermisos);
routes.get("/consultar/:idPermiso", VerificarRol , consultarPermiso);
routes.post("/crear", VerificarRol , crearPermiso);
routes.post("/editar", VerificarRol , editarPermiso);
routes.post("/eliminar", VerificarRol , eliminarPermiso);

module.exports = routes;
