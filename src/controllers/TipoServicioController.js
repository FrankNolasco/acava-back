const { callProcedure } = require("../functions/SqlScripts");
const listarTipoServicios = (req, res, next) => {
  callProcedure(`listarTiposServicio()`, res,next);
};
const consultarTipoServicio = (req, res, next) => {
  const { idTipoServicio } = req.params;
  callProcedure(`consultarTipoServicio(${idTipoServicio})`, res,next);
};
const crearTipoServicio = (req, res, next) => {
  const { id_usuario_registro, Nombre } = req.body;
  callProcedure(`crearTipoServicio( '${Nombre}' , '${id_usuario_registro}' )`, res,next);
};
const editarTipoServicio = (req, res, next) => {
  const { Id_Tipo_Servicio, Descripcion } = req.body;
  callProcedure(`editarTipoServicio( ${Id_Tipo_Servicio} , '${Descripcion}' )`, res,next);
};
const eliminarTipoServicio = (req, res, next) => {
  const { idTipoServicio } = req.body;
  callProcedure(`eliminarTipoServicio(${idTipoServicio})`, res,next);
};
const listarPapeleraTipoServicios = (req,res,next) => {
  callProcedure('listarPapeleraTipoServicios()',res,next)
}
const restaurarTipoServicio = (req,res,next) => {
  const { idTipoServicio } = req.body
  callProcedure(`restaurarTipoServicio('${idTipoServicio}')`,res,next)
}

const eliminarPermanentementeTipoServicio = (req,res,next) => {
  const { idTipoServicio } = req.body
  callProcedure(`eliminarPermanentementeTipoServicio('${idTipoServicio}')`,res,next)
}

module.exports = {
  listarTipoServicios,
  consultarTipoServicio,
  crearTipoServicio,
  editarTipoServicio,
  eliminarTipoServicio,
  listarPapeleraTipoServicios,
  restaurarTipoServicio,
  eliminarPermanentementeTipoServicio
};
