const { Router } = require("express");
const {
  listarModulos,
  consultarModulo,
  crearModulo,
  editarModulo,
  eliminarModulo,
} = require("../controllers/Modulo.controller");
const routes = Router();

routes.get("/listar", listarModulos);
routes.get("/consultar/:idModulo", consultarModulo);
routes.post("/crear", crearModulo);
routes.post("/editar", editarModulo);
routes.post("/eliminar", eliminarModulo);

module.exports = routes;
