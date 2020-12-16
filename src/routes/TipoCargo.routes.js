const { Router } = require("express");
const {
  listarTipoCargos,
  consultarTipoCargo,
  crearTipoCargo,
  editarTipoCargo,
  eliminarTipoCargo,
} = require("../controllers/TipoCargo.controller");
const routes = Router();

routes.get("/listar", listarTipoCargos);
routes.get("/consultar/:idTipoCargo", consultarTipoCargo);
routes.post("/crear", crearTipoCargo);
routes.post("/editar", editarTipoCargo);
routes.post("/eliminar", eliminarTipoCargo);

module.exports = routes;
