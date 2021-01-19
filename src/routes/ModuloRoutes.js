const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarModulos,
  consultarModulo,
  consultarModulosPorRol,
  crearModulo,
  editarModulo,
  eliminarModulo,
} = require("../controllers/ModuloController");
const routes = Router();

routes.get("/listar", VerificarRol , listarModulos);
routes.get("/consultar/:idModulo", VerificarRol , consultarModulo);
routes.post("/crear", VerificarRol , crearModulo);
routes.post("/editar", VerificarRol , editarModulo);
routes.post("/eliminar", VerificarRol , eliminarModulo);
routes.post("/rol/consultar", VerificarRol ,consultarModulosPorRol)

module.exports = routes;
