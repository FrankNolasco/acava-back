const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarPersonas,
  consultarPersona,
  crearPersona,
  editarPersona,
  eliminarPersona,
  consultarPersonaPorDni,
} = require("../controllers/Persona.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarPersonas);
routes.get("/consultar/:idPersona", VerificarRol , consultarPersona);
routes.get("/consultar/dni/:dni", VerificarRol , consultarPersonaPorDni);
routes.post("/crear", VerificarRol , crearPersona);
routes.post("/editar", VerificarRol , editarPersona);
routes.post("/eliminar", VerificarRol , eliminarPersona);

module.exports = routes;
