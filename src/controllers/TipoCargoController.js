const { callProcedure } = require("../functions/SqlScripts");

const listarTipoCargos = (req, res, next) => {
  callProcedure(`listarTiposCargo()`, res,next);
};
const consultarTipoCargo = (req, res, next) => {
  const { idTipoCargo } = req.params;
  callProcedure(`consultarTipoCargo(${idTipoCargo})`, res,next);
};
const crearTipoCargo = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearTipoCargo( '${Nombre}' , '${id_usuario_registro}')`,
    res,next
  );
};
const editarTipoCargo = (req, res, next) => {
  const {
    idTipoCargo ,
    Nombre
  } = req.body;
  callProcedure(
    `editarTipoCargo(${idTipoCargo} , '${Nombre}')`,
    res,next
  );
};

const eliminarTipoCargo = (req, res, next) => {
  const { idTipoCargo } = req.body;
  callProcedure(`eliminarTipoCargo(${idTipoCargo})`, res,next);
};

module.exports = {
  listarTipoCargos,
  consultarTipoCargo,
  crearTipoCargo,
  editarTipoCargo,
  eliminarTipoCargo,
};
