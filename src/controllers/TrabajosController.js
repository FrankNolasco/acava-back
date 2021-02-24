const {
  callProcedure,
  callProcedureForPromise,
} = require("../functions/SqlScripts");
const { subirImagenCloudinary } = require("../cloudinaryClient");
const listarTrabajos = (req, res, next) => {
  callProcedure(`listarTrabajos()`, res, next);
};
const consultarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.params;
  callProcedure(`consultarTrabajo(${idTrabajo})`, res, next);
};
const crearTrabajo = async (req, res, next) => {
  const {
    id_usuario_registro,
    nombre,
    descripcion,
    id_servicio,
    Imagen_referencial,
  } = req.body;
  const result = await subirImagenCloudinary(Imagen_referencial);
  callProcedure(
    `crearTrabajo('${nombre}','${id_servicio}','${id_usuario_registro}','${result.secure_url}','${descripcion}')`,
    res,
    next
  );
};
const editarTrabajo = async (req, res, next) => {
  const {
    Id_Trabajo,
    Nombre_trabajo,
    Descripcion,
    Id_Servicio,
    Imagen_source,
    image_modified,
    imagenUploaded,
  } = req.body;
  if (image_modified) {
    const result = await subirImagenCloudinary(imagenUploaded);
    if (result) {
      callProcedure(
        `editarTrabajo(${Id_Trabajo},'${Nombre_trabajo}','${Id_Servicio}','${result.secure_url}','${Descripcion}')`,
        res,
        next
      );
    } else {
      res.sendStatus(400);
    }
  } else {
    callProcedure(
      `editarTrabajo(${Id_Trabajo},'${Nombre_trabajo}','${Id_Servicio}','${Imagen_source}','${Descripcion}')`,
      res,
      next
    );
  }
};
const consultarTrabajoPorServicio = (req, res, next) => {
  const { idServicio } = req.body;
  callProcedure(`consultarTrabajosPorServicio('${idServicio}')`, res, next);
};
const eliminarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`eliminarTrabajo(${idTrabajo})`, res, next);
};
const listarPapeleraTrabajos = (req, res, next) => {
  callProcedure("listarPapeleraTrabajos()", res, next);
};
const restaurarTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`restaurarTrabajo('${idTrabajo}')`, res, next);
};
const eliminarPermanentementeTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`eliminarPermanentementeTrabajo('${idTrabajo}')`, res, next);
};
const consultarGaleriaTrabajo = (req, res, next) => {
  const { idTrabajo } = req.body;
  callProcedure(`consultarGaleriaTrabajo('${idTrabajo}')`, res, next);
};

const InsertarImagen = (idTrabajo, imagen,idx) =>
      new Promise(async (resolve, reject) => {
        const result = await subirImagenCloudinary(imagen);
        callProcedureForPromise(
          `insertarImagenGaleriaTrabajo('${idTrabajo}','${imagen}','${result.secure_url}')`,
          resolve,
          reject,
          idx
        );
      });
const insertarImagenGaleriaTrabajo = (req, res, next) => {
  const { idTrabajo, arrayImages } = req.body;
  if (Array.isArray(arrayImages)) {
    return arrayImages.forEach(async(imageName,idx)=>{
      if((await InsertarImagen(idTrabajo, imageName,idx).then((x) => x)).valueOf() === arrayImages.length - 1){
        return res.sendStatus(200)
      }
    })
  } else {
    res.sendStatus(500);
  }
};
const eliminarImagenDeGaleriaTrabajo = (req, res, next) => {
  const { idGaleriaTrabajo } = req.body;
  console.log(idGaleriaTrabajo);
  callProcedure(
    `eliminarImagenDeGaleriaTrabajo('${idGaleriaTrabajo}')`,
    res,
    next
  );
};
module.exports = {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
  restaurarTrabajo,
  listarPapeleraTrabajos,
  eliminarPermanentementeTrabajo,
  consultarTrabajoPorServicio,
  consultarGaleriaTrabajo,
  insertarImagenGaleriaTrabajo,
  eliminarImagenDeGaleriaTrabajo,
};
