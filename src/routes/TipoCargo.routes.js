const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarTipoCargos,
  consultarTipoCargo,
  crearTipoCargo,
  editarTipoCargo,
  eliminarTipoCargo,
} = require("../controllers/TipoCargo.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarTipoCargos);
routes.get("/consultar/:idTipoCargo", VerificarRol , consultarTipoCargo);
routes.post("/crear", VerificarRol , crearTipoCargo);
routes.post("/editar", VerificarRol , editarTipoCargo);
routes.post("/eliminar", VerificarRol , eliminarTipoCargo);

module.exports = routes;
