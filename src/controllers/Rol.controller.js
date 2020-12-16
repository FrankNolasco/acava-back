const { callProcedure } = require("../functions/SqlScripts");

const listarRoles = (req, res, next) => {
  callProcedure(`listarRoles()`, res);
};
const consultarRol = (req, res, next) => {
  const { idRol } = req.params;
  callProcedure(`consultarRol(${idRol})`, res);
};
const crearRol = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearRol( '${Nombre}' , '${id_usuario_registro}')`,
    res
  );
};
const editarRol = (req, res, next) => {
  const {
    idRol,
    nombre,
  } = req.body;
  callProcedure(
    `editarRol(${idRol},'${nombre}')`,
    res
  );
};

const eliminarRol = (req, res, next) => {
  const { idRol } = req.body;
  callProcedure(`eliminarRol(${idRol})`, res);
};

module.exports = {
  listarRoles,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
};
