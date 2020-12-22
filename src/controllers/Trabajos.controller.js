const { callProcedure } = require("../functions/SqlScripts");
const { subirImagenCloudinary } = require("../cloudinaryClient");

const listarTrabajos = (req, res, next) => {
  callProcedure(`listarTrabajos()`, res,next);
};
const consultarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.params;
  callProcedure(`consultarTrabajo(${idTrabajo})`, res,next);
};
const crearTrabajo = async (req, res, next) => {
  const { id_usuario_registro, nombre,descripcion, id_servicio, Imagen_referencial } = req.body;
  const result = await subirImagenCloudinary(Imagen_referencial);
  callProcedure(
    `crearTrabajo('${nombre}','${id_servicio}','${id_usuario_registro}','${result.secure_url}','${descripcion}')`,
    res,next
  );
};
const editarTrabajo = (req, res, next) => {
  const { idTrabajo, nombre,descripcion, id_servicio, image_source } = req.body;
  callProcedure(
    `editarTrabajo(${idTrabajo},'${nombre}','${id_servicio}','${image_source}','${descripcion}')`,
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
