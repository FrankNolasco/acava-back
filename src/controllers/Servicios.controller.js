const { callProcedure } = require("../functions/SqlScripts");

const listarServicios = (req, res, next) => {
  callProcedure(`listarServicios()`, res);
};
const consultarServicio = (req, res, next) => {
  const { idServicio } = req.params;
  callProcedure(`consultarServicio(${idServicio})`, res);
};
const crearServicio = (req, res, next) => {
  const {
    idTipoServicio,
    precio_referencial,
    descripcion,
    nombre_servicio,
    Imagen_source,
    id_usuario_registro,
  } = req.body;
  callProcedure(
    `crearServicio( '${descripcion}', ${idTipoServicio} , '${nombre_servicio}' ,  '${precio_referencial}' , '${Imagen_source}' , '${id_usuario_registro}' )`,
    res
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
    res
  );
};

const eliminarServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`eliminarServicio(${idServicio})`, res);
};

module.exports = {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
};
