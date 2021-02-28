const { subirImagenCloudinary } = require("../cloudinaryClient");
const { callProcedure } = require("../functions/SqlScripts");

const listarServicios = (req, res, next) => {
  callProcedure(`listarServicios()`, res, next);
};
const consultarServicio = (req, res, next) => {
  const { idServicio } = req.params;
  callProcedure(`consultarServicio(${idServicio})`, res, next);
};
const listarPapeleraServicios = (req, res, next) => {
  callProcedure("listarPapeleraServicios()", res, next);
};
const restaurarServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`restaurarServicio('${idServicio}')`, res, next);
};
const eliminarPermanentementeServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`eliminarPermanentementeServicio('${idServicio}')`, res, next);
};
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
const editarServicio = async (req, res, next) => {
  const {
    Id_Servicio,
    Nombre_Servicio,
    Descripcion,
    Imagen_source,
    image_modified,
    imagenUploaded,
    Id_Tipo_Servicio,
    Precio_referencial,
  } = req.body;
  if (image_modified) {
    const result = await subirImagenCloudinary(imagenUploaded);
    if (result) {
      callProcedure(
        `editarServicio(${Id_Servicio},'${Nombre_Servicio}','${Descripcion}','${result.secure_url}','${Id_Tipo_Servicio}','${Precio_referencial}')`,
        res,
        next
      );
    } else {
      res.sendStatus(400);
    }
  } else {
    callProcedure(
      `editarServicio(${Id_Servicio},'${Nombre_Servicio}','${Descripcion}','${Imagen_source}','${Id_Tipo_Servicio}','${Precio_referencial}')`,
      res,
      next
    );
  }
};

const eliminarServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`eliminarServicio(${idServicio})`, res, next);
};

const solicitarServicio = (req, res, next) => {
  const { nombre, correo, telefono, Id_Servicio, id_trabajo } = req.body;
  callProcedure(
    `crearSolicitudServicio('${nombre}','${correo}','${telefono}','${Id_Servicio}','${
      id_trabajo ? id_trabajo : "NULL"
    }')`,
    res,
    next
  );
};

const listarSolicitudesServicio = (req, res, next) => {
  callProcedure(`listarSolicitudesServicio()`,res,next)
}

module.exports = {
  listarServicios,
  consultarServicio,
  crearServicio,
  editarServicio,
  eliminarServicio,
  listarPapeleraServicios,
  restaurarServicio,
  eliminarPermanentementeServicio,
  solicitarServicio,
  listarSolicitudesServicio
};
