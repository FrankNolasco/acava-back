const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarRoles,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
  consultarModuloPorRol,
  eliminarRolModulo,
  crearRolModulo
} = require("../controllers/RolController");
const routes = Router();

routes.get("/listar", VerificarRol , listarRoles);
routes.get("/consultar/:idRol", VerificarRol , consultarRol);
routes.post("/crear", VerificarRol , crearRol);
routes.post("/editar", VerificarRol , editarRol);
routes.post("/eliminar", VerificarRol , eliminarRol);
routes.post("/modulo/consultar", VerificarRol ,consultarModuloPorRol)
routes.post("/modulo/crear", VerificarRol ,crearRolModulo)
routes.post("/modulo/eliminar", VerificarRol ,eliminarRolModulo)

module.exports = routes;
