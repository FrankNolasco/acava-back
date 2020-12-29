const { callProcedure } = require("../functions/SqlScripts");
const bcrypt = require("bcrypt-nodejs");

const listarUsuariosWeb = (req, res, next) => {
  callProcedure(`listarUsuariosWeb()`, res,next);
};

const crearUsuarioWeb = (req,res,next) => {
  const { usuario , clave , id_persona , id_rol , id_usuario_registro } = req.body
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(clave, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      callProcedure(
        `crearUsuarioWeb('${usuario}' , '${hash}' , '${id_persona}' , '${id_rol}','${id_usuario_registro}')`,
        res,
        next
      );
    });
  });
}

const asignarRolUsuarioWeb = (req,res,next) => {
  const {id_rol,id_usuario} = req.body
  callProcedure(`asignarRolUsuarioWeb('${id_rol}','${id_usuario}')`,res,next)
}

module.exports = {
    listarUsuariosWeb,
    crearUsuarioWeb,
    asignarRolUsuarioWeb
};
