const { callProcedure } = require("../functions/SqlScripts");

const listarPermisos = (req, res, next) => {
  callProcedure(`listarPermisos()`, res);
};
const consultarPermiso = (req, res, next) => {
  const { idPermiso } = req.params;
  callProcedure(`consultarPermiso(${idPermiso})`, res);
};
const crearPermiso = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre,
    id_modulo
  } = req.body;
  callProcedure(
    `crearPermiso( '${Nombre}' ,'${id_modulo}' , '${id_usuario_registro}')`,
    res
  );
};
const editarPermiso = (req, res, next) => {
  const {
    idPermiso,
    nombre,
    id_modulo
  } = req.body;
  callProcedure(
    `editarPermiso(${idPermiso},'${nombre}','${id_modulo}')`,
    res
  );
};

const eliminarPermiso = (req, res, next) => {
  const { idPermiso } = req.body;
  callProcedure(`eliminarPermiso(${idPermiso})`, res);
};

module.exports = {
  listarPermisos,
  consultarPermiso,
  crearPermiso,
  editarPermiso,
  eliminarPermiso,
};