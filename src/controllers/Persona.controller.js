const { callProcedure } = require("../functions/SqlScripts");

const listarPersonas = (req, res, next) => {
  callProcedure(`listarPersonas()`, res,next);
};
const consultarPersona = (req, res, next) => {
  const { idPersona } = req.params;
  callProcedure(`consultarPersona(${idPersona})`, res,next);
};
const crearPersona = (req, res, next) => {
  const {
    id_usuario_registro,
    apellidos,
    nombres,
    Direccion_1,
    Direccion_2,
    Documento,
    Email,
    RUC,
    Telefono_1,
    Telefono_2,
  } = req.body;
  callProcedure(
    `crearPersona('${apellidos}','${nombres}','${Direccion_1}','${Direccion_2}','${Documento}','${Email}','${RUC}','${Telefono_1}','${Telefono_2}','${id_usuario_registro}')`,
    res,next
  );
};
const editarPersona = (req, res, next) => {
  const {
    idPersona,
    apellidos,
    nombres,
    Direccion_1,
    Direccion_2,
    Documento,
    Email,
    RUC,
    Telefono_1,
    Telefono_2,
  } = req.body;
  callProcedure(
    `editarPersona(${idPersona},'${apellidos}','${nombres}','${Direccion_1}','${Direccion_2}','${Documento}'
    ,'${Email}','${RUC}','${Telefono_1}','${Telefono_2}')`,
    res,next
  );
};

const eliminarPersona = (req, res, next) => {
  const { idPersona } = req.body;
  callProcedure(`eliminarPersona(${idPersona})`, res,next);
};

module.exports = {
  listarPersonas,
  consultarPersona,
  crearPersona,
  editarPersona,
  eliminarPersona,
};
