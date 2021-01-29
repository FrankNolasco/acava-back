const { callProcedure , connection, callProcedureCallback } = require("../functions/SqlScripts");
const bcrypt = require("bcrypt-nodejs");
const { validarRows } = require("../functions/utils");

const listarUsuariosWeb = (req, res, next) => {
  callProcedure(`listarUsuariosWeb()`, res,next);
};

const crearUsuarioWeb = (req,res,next) => {
  const { usuario , clave , id_persona , id_rol , id_usuario_registro } = req.body
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(clave, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      callProcedure(
        `crearUsuarioWeb('${usuario}' , '${hash}' , '${id_persona}' , '${id_rol}','${id_usuario_registro}')`,
        res,
        next
      );
    });
  });
}

const asignarRolUsuarioWeb = (req,res,next) => {
  const {id_rol,id_usuario} = req.body
  callProcedure(`asignarRolUsuarioWeb('${id_rol}','${id_usuario}')`,res,next)
}

const consultarMenu = (req,res,next) => {
  const {Id_Rol} = req.body 
  callProcedureCallback(`listarMenus('${Id_Rol}')`,(rows) => {
    if(validarRows(rows)){
      const menus = rows[0]
      const aux = []
      const aux2 = []
      Array.isArray(menus) && menus.forEach(menu => {
        if(!aux.includes(menu.Id_Menu)){
          aux.push(menu.Id_Menu)
          aux2.push({ Id_Menu : menu.Id_Menu , Menu : menu.Menu , Icon : menu.Icono })
        }
      })
      const menuRespuesta = aux2.map(el => {
        const subMenus = Array.isArray(menus) && menus.filter(menu => menu.Id_Menu === el.Id_Menu)
        return { ...el , subMenus }
      })
      console.log(menuRespuesta)
      res.send([menuRespuesta]);
    }else{
      res.sendStatus(500)
    }
  },next)
}

module.exports = {
    listarUsuariosWeb,
    crearUsuarioWeb,
    asignarRolUsuarioWeb,
    consultarMenu
};
