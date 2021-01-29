const { callProcedureCallback } = require("../functions/SqlScripts");
const jwt = require("jsonwebtoken");
const { validarRows , encontrarCabeceras } = require("../functions/utils");

const VerificarRol = ( req, res, next ) => {
    try {
        const headers = encontrarCabeceras(req)
        if(headers){
            callProcedureCallback(`consultarClaveSuperSecretaRol('${headers.rol}')`,(rows) => {
                if(validarRows(rows)){
                    const supersecret = rows[0][0].ClaveSupersecreta
                    jwt.verify(headers.token, supersecret ,(err) => {
                        if (!err) return next();
                        else throw new Error()
                    });
                }else{
                    throw new Error()
                }
            })
        }else{
            throw new Error()
        }
    } catch (error) {
        
    }
}

const verificarModulo = (req, res, next) => {
    try {
        const headers = encontrarCabeceras(req);
        const { idModulo } = req.body
        if (headers) {
            callProcedureCallback(`consultarModuloPorRol('${idModulo}','${headers.rol}')` , (rows) => {
                if(validarRows(rows)) return next()
                else throw new Error()
            })
        }
        else throw new Error()
    } catch (error) {
        
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
