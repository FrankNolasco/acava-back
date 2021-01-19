const { callProcedure } = require("../functions/SqlScripts");

const listarRolPermisos = (req, res, next) => {
  callProcedure(`listarRolPermisos()`, res,next);
};
const consultarRolPermiso = (req, res, next) => {
  const { idRolPermiso } = req.params;
  callProcedure(`consultarRolPermiso(${idRolPermiso})`, res,next);
};
const consultarPermisosRol = (req, res, next) => {
  const { idRol } = req.params;
  callProcedure(`ConsultarPermisosRol(${idRol})`, res,next);
};
const crearRolPermiso = (req, res, next) => {
  const {
    idRol,
    idPermiso,
    id_usuario_registro
  } = req.body;
  callProcedure(
    `crearRolPermiso('${idRol}','${idPermiso}','${id_usuario_registro}')`,
    res,next
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
    res,next
  );
};

const eliminarRolPermiso = (req, res, next) => {
  const { idRolPermiso } = req.body;
  callProcedure(`eliminarRolPermiso(${idRolPermiso})`, res,next);
};

module.exports = {
  listarRolPermisos,
  consultarRolPermiso,
  crearRolPermiso,
  editarRolPermiso,
  eliminarRolPermiso,
  consultarPermisosRol,
};