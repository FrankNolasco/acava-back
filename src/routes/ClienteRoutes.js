const { Router } = require("express");
const {
  listarClientes,
  consultarCliente,
  crearCliente,
  editarCliente,
  eliminarCliente,
} = require("../controllers/ClienteController");
const { VerificarRol } = require("../controllers/SecurityController");
const routes = Router();

routes.get("/listar", VerificarRol , listarClientes);
routes.get("/consultar/:idCliente", VerificarRol , consultarCliente);
routes.post("/crear", VerificarRol , crearCliente);
routes.post("/editar", VerificarRol , editarCliente);
routes.post("/eliminar", VerificarRol , eliminarCliente);

module.exports = routes;
