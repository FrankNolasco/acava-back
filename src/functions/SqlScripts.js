var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  // user: "root",
  user: "frank",
  // password: "Frank09por123*",
  password: "Frank09p0r123*",
  database: "acabados",
});

function callProcedure(procedure, res,next) {
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(`CALL ${procedure}`, (err, rows, fields) => {
    if (err) next(err);
    res.send(rows);
  });
}

function callProcedureCallback(procedure, cb ) {
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(`CALL ${procedure}`, (err, rows, fields) => {
    if (err) return next(err);
    cb(rows)
  });
}


const Scripts = {
  callProcedure,
  callProcedureCallback,
  connection,
};

module.exports = Scripts;
