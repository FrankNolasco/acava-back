const { callProcedure } = require("../functions/SqlScripts");

const listarModulos = (req, res, next) => {
  callProcedure(`listarModulos()`, res);
};
const consultarModulo = (req, res, next) => {
  const { idModulo } = req.params;
  callProcedure(`consultarModulo(${idModulo})`, res);
};
const crearModulo = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearModulo( '${Nombre}' , '${id_usuario_registro}')`,
    res
  );
};
const editarModulo = (req, res, next) => {
  const {
    idModulo ,
    nombre
  } = req.body;
  callProcedure(
    `editarModulo(${idModulo},'${nombre}')`,
    res
  );
};

const eliminarModulo = (req, res, next) => {
  const { idModulo } = req.body;
  callProcedure(`eliminarModulo(${idModulo})`, res);
};

module.exports = {
  listarModulos,
  consultarModulo,
  crearModulo,
  editarModulo,
  eliminarModulo,
};
