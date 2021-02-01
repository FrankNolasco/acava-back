const { Router } = require("express");
const { insertarCorreo } = require("../controllers/InicialController")
const routes = Router();

routes.post("/api/correo/contacto",insertarCorreo)

module.exports = routes;