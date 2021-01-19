const { callProcedure } = require("../functions/SqlScripts");

const listarModulos = (req, res, next) => {
  callProcedure(`listarModulos()`, res,next);
};
const consultarModulo = (req, res, next) => {
  const { idModulo } = req.params;
  callProcedure(`consultarModulo(${idModulo})`, res,next);
};
const crearModulo = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearModulo( '${Nombre}' , '${id_usuario_registro}')`,
    res,next
  );
};
const editarModulo = (req, res, next) => {
  const {
    idModulo ,
    nombre
  } = req.body;
  callProcedure(
    `editarModulo(${idModulo},'${nombre}')`,
    res,next
  );
};

const eliminarModulo = (req, res, next) => {
  const { idModulo } = req.body;
  callProcedure(`eliminarModulo(${idModulo})`, res,next);
};

const consultarModulosPorRol = (req, res, next) => {
  const { idRol } = req.body;
  callProcedure(`consultarModulosPorRol('${idRol}')`,res,next);
}

module.exports = {
  listarModulos,
  consultarModulo,
  crearModulo,
  editarModulo,
  eliminarModulo,
  consultarModulosPorRol,
};
