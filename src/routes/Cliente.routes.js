const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarClientes,
  consultarCliente,
  crearCliente,
  editarCliente,
  eliminarCliente,
} = require("../controllers/Cliente.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarClientes);
routes.get("/consultar/:idCliente", VerificarRol , consultarCliente);
routes.post("/crear", VerificarRol , crearCliente);
routes.post("/editar", VerificarRol , editarCliente);
routes.post("/eliminar", VerificarRol , eliminarCliente);

module.exports = routes;
