const StrategyCtrl = {};

const bcrypt = require("bcrypt-nodejs");
const { connection } = require("../functions/SqlScripts");

StrategyCtrl.localSignin = (username, password, done) => {
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(
    `CALL consultarUsuarioWeb('${username}')`,
    (err, rows, fields) => {
      if (err) {
        return done(err);
      }
      try {
        const user = rows[0][0];
        if (!user) {
          return done(null, false);
        }
        let isValid = bcrypt.compareSync(password, user.Clave);
        if (!isValid) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  );
};

module.exports = StrategyCtrl;
