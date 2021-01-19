const { connection } = require("../functions/SqlScripts");
const jwt = require("jsonwebtoken");
const { validarRows } = require("../functions/utils");

const VerificarRol = ( req, res, next ) => {
    const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    try {
        const bearer = bearerHeader.split(" ");

        if(Array.isArray(bearer) && bearer.length >= 3){
            const token = bearer[1];
            
            const bearerRol = bearer[2];

            if (parseInt(bearerRol) > 0) {
                if (!connection._connectCalled) {
                    connection.connect();
                }
                connection.query(`CALL consultarClaveSuperSecretaRol('${bearerRol}')`, (err, rows, fields) => {
                    if (err){
                        res.sendStatus(500);
                    }

                    if(validarRows(rows)){
                        const supersecret = rows[0][0].ClaveSupersecreta
                        jwt.verify(token, supersecret , function (err) {
                            if (err) {
                                return res.sendStatus(500);
                            }else{
                                next();
                            }
                        });
                    }else{
                        res.sendStatus(500)
                    }
                });
            }else{
                res.sendStatus(500)
            }
        }
        else{
            res.sendStatus(500)
        }
    } catch (error) {
        res.sendStatus(500)
    }
  } else {
    res.sendStatus(403);
  }
}

const verificarModulo = (req, res, next) => {
    const { idModulo } = req.body
    const headers = req.headers["authorization"];
    if (typeof headers !== "undefined") {
        const ArrayHeader = headers.split(" ");
        if(Array.isArray(ArrayHeader) && ArrayHeader.length >= 3){
            const idRol = ArrayHeader[2];
            if(idRol){
                if (!connection._connectCalled) {
                    connection.connect();
                }
                connection.query(`CALL consultarModuloPorRol('${idModulo}','${idRol}')`, (err, rows, fields) => {
                    if (err){
                        res.sendStatus(500);
                    }
                    else{
                        if(validarRows(rows)){
                            res.send([{
                                response : 200,
                                authorization : true,
                            }])
                        }else{
                            res.sendStatus(500)
                        }
                    }
                });
            }else{
                res.sendStatus(500)
            }
        }else{
            res.sendStatus(500)
        }
    }
    else{
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