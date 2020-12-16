const { callProcedure } = require("../functions/SqlScripts");

const listarTipoCargos = (req, res, next) => {
  callProcedure(`listarTiposCargos()`, res);
};
const consultarTipoCargo = (req, res, next) => {
  const { idTipoCargo } = req.params;
  callProcedure(`consultarTipoCargo(${idTipoCargo})`, res);
};
const crearTipoCargo = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearTipoCargo( '${Nombre}' , '${id_usuario_registro}')`,
    res
  );
};
const editarTipoCargo = (req, res, next) => {
  const {
    idTipoCargo ,
    Nombre
  } = req.body;
  callProcedure(
    `editarTipoCargo(${idTipoCargo} , '${Nombre}')`,
    res
  );
};

const eliminarTipoCargo = (req, res, next) => {
  const { idTipoCargo } = req.body;
  callProcedure(`eliminarTipoCargo(${idTipoCargo})`, res);
};

module.exports = {
  listarTipoCargos,
  consultarTipoCargo,
  crearTipoCargo,
  editarTipoCargo,
  eliminarTipoCargo,
};
