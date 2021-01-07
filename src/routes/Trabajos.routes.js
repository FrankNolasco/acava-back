const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
  restaurarTrabajo,
  listarPapeleraTrabajos,
  eliminarPermanentementeTrabajo
} = require("../controllers/Trabajos.controller");
const routes = Router();
routes.get("/listar", listarTrabajos);
routes.get("/consultar/:idTrabajo", VerificarRol , consultarTrabajo);
routes.get("/papelera/listar", VerificarRol , listarPapeleraTrabajos);
routes.post("/crear", VerificarRol , crearTrabajo);
routes.post("/editar", VerificarRol , editarTrabajo);
routes.post("/eliminar", VerificarRol , eliminarTrabajo);
routes.post("/restaurar", VerificarRol , restaurarTrabajo);
routes.post("/perma-eliminar",VerificarRol,eliminarPermanentementeTrabajo)
module.exports = routes;
