const { Router } = require("express");
const {
  listarClientes,
  consultarCliente,
  crearCliente,
  editarCliente,
  eliminarCliente,
} = require("../controllers/Cliente.controller");
const routes = Router();

routes.get("/listar", listarClientes);
routes.get("/consultar/:idCliente", consultarCliente);
routes.post("/crear", crearCliente);
routes.post("/editar", editarCliente);
routes.post("/eliminar", eliminarCliente);

module.exports = routes;
