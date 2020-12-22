const { Router } = require("express");
const routes = Router();
const { listarUsuariosWeb } = require("../controllers/Usuarios.controller");
routes.get("/listar", listarUsuariosWeb);

module.exports = routes;
