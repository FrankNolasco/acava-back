const { callProcedure } = require("../functions/SqlScripts");

const listarEmpleados = (req, res, next) => {
  callProcedure(`listarEmpleados()`, res);
};
const consultarEmpleado = (req, res, next) => {
  const { idEmpleado } = req.params;
  callProcedure(`consultarEmpleado(${idEmpleado})`, res);
};
const crearEmpleado = (req, res, next) => {
  const {
    id_usuario_registro,
    id_persona,
    id_tipoCargo
  } = req.body;
  callProcedure(
    `crearEmpleado('${id_persona}','${id_tipoCargo}','${id_usuario_registro}')`,
    res
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
    res
  );
};

const eliminarEmpleado = (req, res, next) => {
  const { idEmpleado } = req.body;
  callProcedure(`eliminarEmpleado(${idEmpleado})`, res);
};

module.exports = {
  listarEmpleados,
  consultarEmpleado,
  crearEmpleado,
  editarEmpleado,
  eliminarEmpleado,
};
