const { subirImagenCloudinary } = require("../cloudinaryClient");
const { callProcedure } = require("../functions/SqlScripts");

const listarServicios = (req, res, next) => {
  callProcedure(`listarServicios()`, res, next);
};
const consultarServicio = (req, res, next) => {
  const { idServicio } = req.params;
  callProcedure(`consultarServicio(${idServicio})`, res, next);
};
const listarPapeleraServicios = (req,res,next) => {
  callProcedure('listarPapeleraServicios()',res,next)
}
const crearServicio = async (req, res, next) => {
  const {
    Id_Tipo_Servicio,
    Precio_referencial,
    Descripcion,
    Nombre_Servicio,
    Imagen_referencial,
    id_usuario_registro,
  } = req.body;
  const result = await subirImagenCloudinary(Imagen_referencial);
  if (result) {
    callProcedure(
      `crearServicio( '${Descripcion}', ${Id_Tipo_Servicio} , '${Nombre_Servicio}' ,  
      '${Precio_referencial}' , '${result.secure_url}' , '${id_usuario_registro}' )`,
      res,
      next
    );
  } else {
    res.sendStatus(400);
  }
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
    res,
    next
  );
};

const eliminarServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`eliminarServicio(${idServicio})`, res, next);
};

module.exports = {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
  listarPapeleraServicios
};
