const { callProcedure } = require("../functions/SqlScripts");

const listarEstados = (req, res, next) => {
  callProcedure(`listarEstados()`, res,next);
};
const consultarEstado = (req, res, next) => {
  const { idEstado } = req.params;
  callProcedure(`consultarEstado(${idEstado})`, res,next);
};
const crearEstado = (req, res, next) => {
  const {
    Nombre
  } = req.body;
  callProcedure(
    `crearEstado( '${Nombre}' )`,
    res,next
  );
};
const editarEstado = (req, res, next) => {
  const {
    idEstado,
    nombre
  } = req.body;
  callProcedure(
    `editarEstado(${idEstado},'${nombre}')`,
    res,next
  );
};


module.exports = {
  listarEstados,
  consultarEstado,
  crearEstado,
  editarEstado
};