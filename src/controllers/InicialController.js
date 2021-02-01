const { callProcedure } = require("../functions/SqlScripts")

const insertarCorreo = (req , res , next) => {
    const { correo } = req.body
    callProcedure(`GuardarCorreo('${correo}')`,res,next)
}

module.exports = {
    insertarCorreo
}