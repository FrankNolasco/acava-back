const { Router } = require("express");
const {
  listarRols,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
} = require("../controllers/Rol.controller");
const routes = Router();

routes.get("/listar", listarRols);
routes.get("/consultar/:idRol", consultarRol);
routes.post("/crear", crearRol);
routes.post("/editar", editarRol);
routes.post("/eliminar", eliminarRol);

module.exports = routes;
