const { connection, callProcedureCallback } = require("../functions/SqlScripts");
const jwt = require("jsonwebtoken");
const { validarRows , encontrarCabeceras } = require("../functions/utils");

const VerificarRol = ( req, res, next ) => {
    const headers = encontrarCabeceras(req)
    if(headers){
        callProcedureCallback(`consultarClaveSuperSecretaRol('${headers.rol}')`,(rows) => {
            if(validarRows(rows)){
                const supersecret = rows[0][0].ClaveSupersecreta
                jwt.verify(headers.token, supersecret , function (err) {
                    if (err) {
                        return next(err);
                    }else{
                        return next();
                    }
                });
            }else{
                return next(new Error())
            }
        })
    }else{
        return next(new Error())
    }
}

const verificarModulo = (req, res, next) => {
    const headers = encontrarCabeceras(req);
    const { idModulo } = req.body
    if (headers) {
        callProcedureCallback(`consultarModuloPorRol('${idModulo}','${headers.rol}')` , (rows) => {
            if(validarRows(rows)) return next()
            else{
                return next(new Error())
            }
        })
    }
    else{
        return next(new Error())
    }
}

const verificarPermiso = (req, res, next) => {
    const { idPermiso } = req.body
    res.sendStatus(200)
}

module.exports = {
    VerificarRol,
    verificarModulo
}
