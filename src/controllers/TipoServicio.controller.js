const { callProcedure } = require("../functions/SqlScripts");

const listarTipoServicios = (req, res, next) => {
  callProcedure(`listarTiposServicio()`, res);
};
const consultarTipoServicio = (req, res, next) => {
  const { idTipoServicio } = req.params;
  callProcedure(`consultarTipoServicio(${idTipoServicio})`, res);
};
const crearTipoServicio = (req, res, next) => {
  const { id_usuario_registro, Nombre } = req.body;
  callProcedure(`crearTipoServicio( '${Nombre}' , '${id_usuario_registro}' )`, res);
};
const editarTipoServicio = (req, res, next) => {
  const { idTipoServicio, Nombre } = req.body;
  callProcedure(`editarTipoServicio( ${idTipoServicio} , '${Nombre}' )`, res);
};

const eliminarTipoServicio = (req, res, next) => {
  const { idTipoServicio } = req.body;
  callProcedure(`eliminarTipoServicio(${idTipoServicio})`, res);
};

module.exports = {
  listarTipoServicios,
  consultarTipoServicio,
  crearTipoServicio,
  editarTipoServicio,
  eliminarTipoServicio,
};
