const { cloudinaryClient } = require("../cloudinaryClient");
const { callProcedure } = require("../functions/SqlScripts");

const listarServicios = (req, res, next) => {
  callProcedure(`listarServicios()`, res,next);
};
const consultarServicio = (req, res, next) => {
  const { idServicio } = req.params;
  callProcedure(`consultarServicio(${idServicio})`, res,next);
};
const crearServicio = async (req, res, next) => {
  const {
    idTipoServicio,
    precio_referencial,
    descripcion,
    nombre_servicio,
    filePath,
    id_usuario_registro,
  } = req.body;
  const result = await cloudinaryClient.v2.uploader.upload(filePath)
  callProcedure(
    `crearServicio( '${descripcion}', ${idTipoServicio} , '${nombre_servicio}' ,  '${precio_referencial}' , '${result.secure_url}' , '${id_usuario_registro}' )`,
    res,next
  );
};
const editarServicio = (req, res, next) => {
  const {
    idServicio,
    nombreServicio,
    descripcion,
    imagenSource,
    idTipoServicio,
    precioReferencial,
  } = req.body;
  callProcedure(
    `editarServicio(${idServicio},'${nombreServicio}','${descripcion}','${imagenSource}','${idTipoServicio}','${precioReferencial}')`,
    res,next
  );
};

const eliminarServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`eliminarServicio(${idServicio})`, res,next);
};

module.exports = {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
};
