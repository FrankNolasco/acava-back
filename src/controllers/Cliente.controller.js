const { callProcedure } = require("../functions/SqlScripts");

const listarClientes = (req, res, next) => {
  callProcedure(`listarClientes()`, res);
};
const consultarCliente = (req, res, next) => {
  const { idCliente } = req.params;
  callProcedure(`consultarCliente(${idCliente})`, res);
};
const crearCliente = (req, res, next) => {
  const {
    id_usuario_registro ,
    id_persona
  } = req.body;
  callProcedure(
    `crearCliente( '${id_persona}' , '${id_usuario_registro}')`,
    res
  );
};
const editarCliente = (req, res, next) => {
  const {
    idCliente,
    id_persona
  } = req.body;
  callProcedure(
    `editarCliente(${idCliente},'${id_persona}')`,
    res
  );
};

const eliminarCliente = (req, res, next) => {
  const { idCliente } = req.body;
  callProcedure(`eliminarCliente(${idCliente})`, res);
};

module.exports = {
  listarClientes,
  consultarCliente,
  crearCliente,
  editarCliente,
  eliminarCliente,
};
