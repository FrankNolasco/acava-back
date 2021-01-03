const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarEmpleados,
  consultarEmpleado,
  crearEmpleado,
  editarEmpleado,
  eliminarEmpleado,
} = require("../controllers/Empleado.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarEmpleados);
routes.get("/consultar/:idEmpleado", VerificarRol , consultarEmpleado);
routes.post("/crear", VerificarRol , crearEmpleado);
routes.post("/editar", VerificarRol , editarEmpleado);
routes.post("/eliminar", VerificarRol , eliminarEmpleado);

module.exports = routes;
