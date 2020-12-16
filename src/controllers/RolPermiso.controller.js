const { callProcedure } = require("../functions/SqlScripts");

const listarRolPermisos = (req, res, next) => {
  callProcedure(`listarRolPermisos()`, res);
};
const consultarRolPermiso = (req, res, next) => {
  const { idRolPermiso } = req.params;
  callProcedure(`consultarRolPermiso(${idRolPermiso})`, res);
};
const crearRolPermiso = (req, res, next) => {
  const {
    idRol,
    idPermiso,
    id_usuario_registro
  } = req.body;
  callProcedure(
    `crearRolPermiso('${idRol}','${idPermiso}','${id_usuario_registro}')`,
    res
  );
};
const editarRolPermiso = (req, res, next) => {
  const {
    idRolPermiso,
    idRol,
    idPermiso
  } = req.body;
  callProcedure(
    `editarRolPermiso(${idRolPermiso},'${idRol}','${idPermiso}')`,
    res
  );
};

const eliminarRolPermiso = (req, res, next) => {
  const { idRolPermiso } = req.body;
  callProcedure(`eliminarRolPermiso(${idRolPermiso})`, res);
};

module.exports = {
  listarRolPermisos,
  consultarRolPermiso,
  crearRolPermiso,
  editarRolPermiso,
  eliminarRolPermiso,
};