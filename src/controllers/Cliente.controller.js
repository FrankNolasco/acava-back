const { callProcedure } = require("../functions/SqlScripts");

const listarClientes = (req, res, next) => {
  callProcedure(`listarClientes()`, res,next);
};
const consultarCliente = (req, res, next) => {
  const { idCliente } = req.params;
  callProcedure(`consultarCliente(${idCliente})`, res,next);
};
const crearCliente = (req, res, next) => {
  const {
    id_usuario_registro ,
    id_persona
  } = req.body;
  callProcedure(
    `crearCliente( '${id_persona}' , '${id_usuario_registro}')`,
    res,next
  );
};
const editarCliente = (req, res, next) => {
  const {
    idCliente,
    id_persona
  } = req.body;
  callProcedure(
    `editarCliente(${idCliente},'${id_persona}')`,
    res,next
  );
};

const eliminarCliente = (req, res, next) => {
  const { idCliente } = req.body;
  callProcedure(`eliminarCliente(${idCliente})`, res,next);
};

module.exports = {
  listarClientes,
  consultarCliente,
  crearCliente,
  editarCliente,
  eliminarCliente,
};
