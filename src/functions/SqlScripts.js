var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Frank09por123*",
  database: "acabados",
});

function executeQuery(query, res) {
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;
    connection.end();
    res.send(rows);
  });
}

function callProcedure(procedure, res,next) {
  if (!connection._connectCalled) {
    connection.connect();
  }
  connection.query(`CALL ${procedure}`, (err, rows, fields) => {
    if (err) next(err);
    res.send(rows);
  });
}

const Scripts = {
  executeQuery,
  callProcedure,
  connection,
};

module.exports = Scripts;
