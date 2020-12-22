const { callProcedure } = require("../functions/SqlScripts");

const listarUsuariosWeb = (req, res, next) => {
  callProcedure(`listarUsuariosWeb()`, res,next);
};

module.exports = {
    listarUsuariosWeb,
};
