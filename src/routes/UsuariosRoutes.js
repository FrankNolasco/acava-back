const { Router } = require("express");
const { VerificarRol,verificarModulo } = require("../controllers/SecurityController");
const routes = Router();
const { listarUsuariosWeb, crearUsuarioWeb , asignarRolUsuarioWeb, consultarMenu } = require("../controllers/UsuariosController");
routes.get("/listar", VerificarRol ,listarUsuariosWeb);
routes.post("/crear", VerificarRol ,crearUsuarioWeb);
routes.post("/rol/asignar", VerificarRol ,asignarRolUsuarioWeb)
routes.post("/menus/consultar", VerificarRol ,consultarMenu);
routes.post("/verificar/modulo", VerificarRol ,verificarModulo , (req, res) => {
    res.send([ { response : 200, authorization : true, } ])
})

module.exports = routes;
