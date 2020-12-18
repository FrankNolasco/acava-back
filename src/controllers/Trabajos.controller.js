const { callProcedure } = require("../functions/SqlScripts");

const listarTrabajos = (req, res, next) => {
  callProcedure(`listarTrabajos()`, res,next);
};
const consultarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.params;
  callProcedure(`consultarTrabajo(${idTrabajo})`, res,next);
};
const crearTrabajo = (req, res, next) => {
  const { id_usuario_registro, nombre, id_servicio, image_source } = req.body;
  callProcedure(
    `crearTrabajo('${nombre}','${id_servicio}','${id_usuario_registro}','${image_source}')`,
    res,next
  );
};
const editarTrabajo = (req, res, next) => {
  const { idTrabajo, nombre, id_servicio, image_source } = req.body;
  callProcedure(
    `editarTrabajo(${idTrabajo},'${nombre}','${id_servicio}','${image_source}')`,
    res,next
  );
};

const eliminarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`eliminarTrabajo(${idTrabajo})`, res,next);
};

module.exports = {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
};
