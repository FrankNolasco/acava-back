const { Router } = require("express");
const routes = Router();
const { listarUsuariosWeb, crearUsuarioWeb , asignarRolUsuarioWeb } = require("../controllers/Usuarios.controller");
routes.get("/listar", listarUsuariosWeb);
routes.post("/crear", crearUsuarioWeb);
routes.post("/rol/asignar",asignarRolUsuarioWeb)

module.exports = routes;
