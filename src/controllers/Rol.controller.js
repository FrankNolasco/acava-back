const { callProcedure } = require("../functions/SqlScripts");

const listarRoles = (req, res, next) => {
  callProcedure(`listarRoles()`, res,next);
};
const consultarRol = (req, res, next) => {
  const { idRol } = req.params;
  callProcedure(`consultarRol(${idRol})`, res,next);
};
const crearRol = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearRol( '${Nombre}' , '${id_usuario_registro}')`,
    res,next
  );
};
const editarRol = (req, res, next) => {
  const {
    idRol,
    nombre,
  } = req.body;
  callProcedure(
    `editarRol(${idRol},'${nombre}')`,
    res,next
  );
};

const eliminarRol = (req, res, next) => {
  const { idRol } = req.body;
  callProcedure(`eliminarRol(${idRol})`, res,next);
};

module.exports = {
  listarRoles,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
};
