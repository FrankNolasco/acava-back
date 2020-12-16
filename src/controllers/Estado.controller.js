const { callProcedure } = require("../functions/SqlScripts");

const listarEstados = (req, res, next) => {
  callProcedure(`listarEstados()`, res);
};
const consultarEstado = (req, res, next) => {
  const { idEstado } = req.params;
  callProcedure(`consultarEstado(${idEstado})`, res);
};
const crearEstado = (req, res, next) => {
  const {
    Nombre
  } = req.body;
  callProcedure(
    `crearEstado( '${Nombre}' )`,
    res
  );
};
const editarEstado = (req, res, next) => {
  const {
    idEstado,
    nombre
  } = req.body;
  callProcedure(
    `editarEstado(${idEstado},'${nombre}')`,
    res
  );
};


module.exports = {
  listarEstados,
  consultarEstado,
  crearEstado,
  editarEstado
};