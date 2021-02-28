const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
  listarPapeleraServicios,
  restaurarServicio,
  eliminarPermanentementeServicio,
  solicitarServicio,
  listarSolicitudesServicio
} = require("../controllers/ServiciosController");
const routes = Router();
routes.get("/listar", listarServicios);
routes.get("/consultar/:idServicio", VerificarRol , consultarServicio);
routes.get("/papelera/listar", VerificarRol , listarPapeleraServicios);
routes.post("/crear", VerificarRol , crearServicio);
routes.post("/editar", VerificarRol , editarServicio);
routes.post("/eliminar", VerificarRol , eliminarServicio);
routes.post("/restaurar", VerificarRol , restaurarServicio);
routes.post("/perma-eliminar",VerificarRol,eliminarPermanentementeServicio)
routes.get("/solicitudes/listar",VerificarRol,listarSolicitudesServicio)
routes.post("/solicitar",solicitarServicio)
module.exports = routes;
