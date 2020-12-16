const { Router } = require("express");
const {
  listarRoles,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
} = require("../controllers/Rol.controller");
const routes = Router();

routes.get("/listar", listarRoles);
routes.get("/consultar/:idRol", consultarRol);
routes.post("/crear", crearRol);
routes.post("/editar", editarRol);
routes.post("/eliminar", eliminarRol);

module.exports = routes;
