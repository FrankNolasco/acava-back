const { Router } = require("express");
const { VerificarRol,verificarModulo } = require("../controllers/Security.controller");
const routes = Router();
const { listarUsuariosWeb, crearUsuarioWeb , asignarRolUsuarioWeb, consultarMenu } = require("../controllers/Usuarios.controller");
routes.get("/listar", VerificarRol ,listarUsuariosWeb);
routes.post("/crear", VerificarRol ,crearUsuarioWeb);
routes.post("/rol/asignar", VerificarRol ,asignarRolUsuarioWeb)
routes.post("/menus/consultar", VerificarRol ,consultarMenu)
routes.post("/verificar/modulo", VerificarRol ,verificarModulo)

module.exports = routes;
