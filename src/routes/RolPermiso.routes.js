const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarRolPermisos,
  consultarRolPermiso,
  crearRolPermiso,
  editarRolPermiso,
  eliminarRolPermiso,
  consultarPermisosRol,
} = require("../controllers/RolPermiso.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarRolPermisos);
routes.get("/consultar/:idRolPermiso", VerificarRol , consultarRolPermiso);
routes.get("/rol/consultar/:idRol", VerificarRol , consultarPermisosRol);
routes.post("/crear", VerificarRol , crearRolPermiso);
routes.post("/editar", VerificarRol , editarRolPermiso);
routes.post("/eliminar", VerificarRol , eliminarRolPermiso);

module.exports = routes;
