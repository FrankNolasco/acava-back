const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarEmpleados,
  consultarEmpleado,
  crearEmpleado,
  editarEmpleado,
  eliminarEmpleado,
} = require("../controllers/EmpleadoController");
const routes = Router();

routes.get("/listar", VerificarRol , listarEmpleados);
routes.get("/consultar/:idEmpleado", VerificarRol , consultarEmpleado);
routes.post("/crear", VerificarRol , crearEmpleado);
routes.post("/editar", VerificarRol , editarEmpleado);
routes.post("/eliminar", VerificarRol , eliminarEmpleado);

module.exports = routes;
