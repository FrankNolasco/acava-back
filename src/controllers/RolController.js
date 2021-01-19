const { callProcedure } = require("../functions/SqlScripts");

const listarRoles = (req, res, next) => {
  callProcedure(`listarRoles()`, res,next);
};
const consultarRol = (req, res, next) => {
  const { idRol } = req.params;
  callProcedure(`consultarRol(${idRol})`, res,next);
};
const crearRol = (req, res, next) => {
  const {
    id_usuario_registro ,
    Nombre
  } = req.body;
  callProcedure(
    `crearRol( '${Nombre}' , '${id_usuario_registro}')`,
    res,next
  );
};
const editarRol = (req, res, next) => {
  const {
    idRol,
    nombre,
  } = req.body;
  callProcedure(
    `editarRol(${idRol},'${nombre}')`,
    res,next
  );
};

const eliminarRol = (req, res, next) => {
  const { idRol } = req.body;
  callProcedure(`eliminarRol(${idRol})`, res,next);
};

const consultarModuloPorRol = (req, res, next) => {
  const { idRol , idModulo }  = req.body;
  callProcedure(`consultarModuloPorRol('${idModulo}','${idRol}')`,res,next)
}

const crearRolModulo = (req, res, next) => {
  const { idRol , idModulo ,id_usuario_registro } = req.body;
  callProcedure(`crearRolModulo('${idRol}','${idModulo}','${id_usuario_registro}')`, res, next)
}

const eliminarRolModulo = (req, res, next) => {
  const { idRegistro } = req.body;
  callProcedure(`eliminarRolModulo('${idRegistro}')`,res,next)
}

module.exports = {
  listarRoles,
  consultarRol,
  crearRol,
  editarRol,
  eliminarRol,
  consultarModuloPorRol,
  crearRolModulo,
  eliminarRolModulo
};
