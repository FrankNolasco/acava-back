const { Router } = require("express");
const {
  listarPersonas,
  consultarPersona,
  crearPersona,
  editarPersona,
  eliminarPersona,
} = require("../controllers/Persona.controller");
const routes = Router();

routes.get("/listar", listarPersonas);
routes.get("/consultar/:idPersona", consultarPersona);
routes.get("/consultar/dni/:dni", consultarPersona);
routes.post("/crear", crearPersona);
routes.post("/editar", editarPersona);
routes.post("/eliminar", eliminarPersona);

module.exports = routes;
