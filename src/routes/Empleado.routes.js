const { Router } = require("express");
const {
  listarEmpleados,
  consultarEmpleado,
  crearEmpleado,
  editarEmpleado,
  eliminarEmpleado,
} = require("../controllers/Empleado.controller");
const routes = Router();

routes.get("/listar", listarEmpleados);
routes.get("/consultar/:idEmpleado", consultarEmpleado);
routes.post("/crear", crearEmpleado);
routes.post("/editar", editarEmpleado);
routes.post("/eliminar", eliminarEmpleado);

module.exports = routes;
