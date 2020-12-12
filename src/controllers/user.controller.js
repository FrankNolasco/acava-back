const Keys = require("./keys.js");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { clave , Id_Rol} = req.user;
  let token = "hola";
  const k = Keys.find((e) => e.id === 1);
  k & (token = jwt.sign({ clave }, k.KEYGEN));
  if (token === "hola") {
    res.sendStatus(403);
  }
  res.json({
    token: token,
    ...req.user, 
    Clave : ""
  });
};

const user = {
  login,
};

module.exports = user;
