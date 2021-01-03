const jwt = require("jsonwebtoken");
const {connection} = require("../functions/SqlScripts")

const login = (req, res) => {
  const { clave , Id_Rol} = req.user;
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(`CALL consultarClaveSuperSecretaRol('${Id_Rol}')`, (err, rows, fields) => {
      if (err){
          res.sendStatus(403);
      }
      if(Array.isArray(rows) && rows.length > 0){
          if(Array.isArray(rows[0]) && rows[0].length > 0){
              if(typeof rows[0][0] !== "undefined" && rows[0][0]){
                  const supersecret = rows[0][0].ClaveSupersecreta
                  let token = "hola";
                  supersecret && (token = jwt.sign({ clave }, supersecret))
                  if (token === "hola") {
                    res.sendStatus(403);
                  }
                  res.json({
                    token: token,
                    ...req.user, 
                    Clave : ""
                  });
              }else{
                  res.sendStatus(403)
              }
          }
          else{
              res.sendStatus(403)
          }
      }
      else{
          res.sendStatus(403)
      }
  });
};

const user = {
  login,
};

module.exports = user;
