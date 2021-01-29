const { callProcedureCallback } = require("../functions/SqlScripts");
const jwt = require("jsonwebtoken");
const { validarRows , encontrarCabeceras } = require("../functions/utils");

const VerificarRol = ( req, res, next ) => {
    let centinela = false
    const headers = encontrarCabeceras(req)
    if(headers){
        callProcedureCallback(`consultarClaveSuperSecretaRol('${headers.rol}')`,(rows) => {
            if(validarRows(rows)){
                const supersecret = rows[0][0].ClaveSupersecreta
                jwt.verify(headers.token, supersecret , function (err) {
                    if (!err) centinela = true;
                });
            }
        })
    }
    console.log(centinela)
    if(centinela){
        return next()
    }else{
        res.sendStatus(500)
    }
}

const verificarModulo = (req, res, next) => {
    let centinela = false
    const headers = encontrarCabeceras(req);
    const { idModulo } = req.body
    if (headers) {
        callProcedureCallback(`consultarModuloPorRol('${idModulo}','${headers.rol}')` , (rows) => {
            if(validarRows(rows)) centinela = true
        })
    }
    console.log(centinela)
    if(centinela){
        return next()
    }else{
        res.sendStatus(500)
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
