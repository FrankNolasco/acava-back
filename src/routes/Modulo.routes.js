const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarModulos,
  consultarModulo,
  consultarModulosPorRol,
  crearModulo,
  editarModulo,
  eliminarModulo,
} = require("../controllers/Modulo.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarModulos);
routes.get("/consultar/:idModulo", VerificarRol , consultarModulo);
routes.post("/crear", VerificarRol , crearModulo);
routes.post("/editar", VerificarRol , editarModulo);
routes.post("/eliminar", VerificarRol , eliminarModulo);
routes.post("/rol/consultar", VerificarRol ,consultarModulosPorRol)

module.exports = routes;
