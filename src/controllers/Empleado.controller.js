const { callProcedure } = require("../functions/SqlScripts");

const listarEmpleados = (req, res, next) => {
  callProcedure(`listarEmpleados()`, res,next);
};
const consultarEmpleado = (req, res, next) => {
  const { idEmpleado } = req.params;
  callProcedure(`consultarEmpleado(${idEmpleado})`, res,next);
};
const crearEmpleado = (req, res, next) => {
  const {
    id_usuario_registro,
    id_persona,
    id_tipoCargo
  } = req.body;
  callProcedure(
    `crearEmpleado('${id_persona}','${id_tipoCargo}','${id_usuario_registro}')`,
    res,next
  );
};
const editarEmpleado = (req, res, next) => {
  const {
    idEmpleado,
    id_persona,
    id_tipoCargo
  } = req.body;
  callProcedure(
    `editarEmpleado(${idEmpleado},'${id_persona}','${id_tipoCargo}')`,
    res,next
  );
};

const eliminarEmpleado = (req, res, next) => {
  const { idEmpleado } = req.body;
  callProcedure(`eliminarEmpleado(${idEmpleado})`, res,next);
};

module.exports = {
  listarEmpleados,
  consultarEmpleado,
  crearEmpleado,
  editarEmpleado,
  eliminarEmpleado,
};
