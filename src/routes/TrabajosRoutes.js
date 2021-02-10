const { Router } = require("express");
const { VerificarRol } = require("../controllers/SecurityController");
const {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
  restaurarTrabajo,
  listarPapeleraTrabajos,
  eliminarPermanentementeTrabajo,
  consultarTrabajoPorServicio
} = require("../controllers/TrabajosController");
const routes = Router();
routes.get("/listar", listarTrabajos);
routes.get("/consultar/:idTrabajo", VerificarRol , consultarTrabajo);
routes.get("/papelera/listar", VerificarRol , listarPapeleraTrabajos);
routes.post("/crear", VerificarRol , crearTrabajo);
routes.post("/editar", VerificarRol , editarTrabajo);
routes.post("/eliminar", VerificarRol , eliminarTrabajo);
routes.post("/restaurar", VerificarRol , restaurarTrabajo);
routes.post("/perma-eliminar",VerificarRol,eliminarPermanentementeTrabajo)
routes.post("/servicio/listar", consultarTrabajoPorServicio)
module.exports = routes;
