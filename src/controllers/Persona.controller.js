const { callProcedure } = require("../functions/SqlScripts");

const listarPersonas = (req, res, next) => {
  callProcedure(`listarPersonas()`, res);
};
const consultarPersona = (req, res, next) => {
  const { idPersona } = req.params;
  callProcedure(`consultarPersona(${idPersona})`, res);
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
    res
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
    res
  );
};

const eliminarPersona = (req, res, next) => {
  const { idPersona } = req.body;
  callProcedure(`eliminarPersona(${idPersona})`, res);
};

module.exports = {
  listarPersonas,
  consultarPersona,
  crearPersona,
  editarPersona,
  eliminarPersona,
};
