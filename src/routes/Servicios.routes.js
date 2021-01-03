const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
  listarPapeleraServicios,
} = require("../controllers/servicios.controller");
const routes = Router();

routes.get("/listar", listarServicios);
routes.get("/papelera/listar", VerificarRol , listarPapeleraServicios);
routes.get("/consultar/:idServicio", VerificarRol , consultarServicio);
routes.post("/crear", VerificarRol , crearServicio);
routes.post("/editar", VerificarRol , editarServicio);
routes.post("/eliminar", VerificarRol , eliminarServicio);


module.exports = routes;
