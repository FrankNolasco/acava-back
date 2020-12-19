const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer  = require("multer")
const path = require('path')
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { localSignin } = require("./controllers/local.strategy.controller");
const { login } = require("./controllers/user.controller");
const app = express();
const port = process.env.PORT | 5000;
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(function (req, res, next) {
  //acceso a conexiones que requieran a esta conexion
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-type,Accept",
    "application/json",
    "text/json"
  );
  res.header("Access-Control-Allow-Methods", "GET", "POST");
  next();
});

app.use(passport.initialize());
app.use("/api/servicio/", require("./routes/Servicios.routes"));
app.use("/api/empleado/", require("./routes/Empleado.routes"));
app.use("/api/cliente/", require("./routes/Cliente.routes"));
app.use("/api/estado/", require("./routes/Estado.routes"));
app.use("/api/modulo/", require("./routes/Modulo.routes"));
app.use("/api/permiso/", require("./routes/Permiso.routes"));
app.use("/api/persona/", require("./routes/Persona.routes"));
app.use("/api/rol/", require("./routes/Rol.routes"));
app.use("/api/rol-permiso/", require("./routes/RolPermiso.routes"));
app.use("/api/tipo-cargo/", require("./routes/TipoCargo.routes"));
app.use("/api/tipo-servicio/", require("./routes/TipoServicio.routes"));
app.use("/api/trabajos/", require("./routes/Trabajos.routes"));
passport.use("local-signin", new LocalStrategy(localSignin));
app.post(
  "/api/login",
  passport.authenticate("local-signin", { session: false }),
  login
);

const storage = multer.diskStorage({
  destination : path.join(__dirname,'/public/uploads'),
  filename : (req,file,cb) => {
    cb(null,new Date().getTime() + path.extname(file.originalname))
  }
})

app.use(multer({storage}).single('file'))

app.get('/cdn/ver/:name' , (req,res,next) => {
  const { name } = req.params
  res.sendFile(path.join(__dirname,`/public/uploads/${name}`))
})

app.post('/api/upload/images', async (req,res,next) => {
  res.send([{imageUploaded : req.file.filename }])
})

app.listen(port, () => console.log(`Example app listening on port port!`));
