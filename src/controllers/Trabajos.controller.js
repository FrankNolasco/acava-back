const { callProcedure } = require("../functions/SqlScripts");

const listarTrabajos = (req, res, next) => {
  callProcedure(`listarTrabajos()`, res);
};
const consultarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.params;
  callProcedure(`consultarTrabajo(${idTrabajo})`, res);
};
const crearTrabajo = (req, res, next) => {
  const { id_usuario_registro, nombre, id_servicio, image_source } = req.body;
  callProcedure(
    `crearTrabajo('${nombre}','${id_servicio}','${id_usuario_registro}','${image_source}')`,
    res
  );
};
const editarTrabajo = (req, res, next) => {
  const { idTrabajo, nombre, id_servicio, image_source } = req.body;
  callProcedure(
    `editarTrabajo(${idTrabajo},'${nombre}','${id_servicio}','${image_source}')`,
    res
  );
};

const eliminarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`eliminarTrabajo(${idTrabajo})`, res);
};

module.exports = {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
};
