const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer  = require("multer")
const path = require('path')
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { localSignin } = require("./controllers/localStrategyController");
const { login } = require("./controllers/userController");
const app = express();
const port = 5000;
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
    "*"
  );
  res.header("Access-Control-Allow-Methods", "GET", "POST","HEAD");
  next();
});

app.get('/',(req,res,next) => {
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/index.html`))
})

app.get('/:filename',(req,res,next) => {
  const {filename} = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/${filename}`))
})

app.get('/:directory/:filename',(req,res,next) => {
  const { directory , filename } = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/${directory}/${filename}`))
})

app.head("/app/Perfil",(req,res,next) => {
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/app/Perfil/index.html`))
})

app.get('/page-data/app/Perfil/page-data.json' , (req,res,next) => {
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/page-data/app/Perfil/page-data.json`))
})

app.get('/app/:directory/:filename',(req,res,next) => {
  const { directory , filename } = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/app/${directory}/${filename}/index.html`))
})

app.get('/app/:directory/:directory2/:filename',(req,res,next) => {
  const { directory , directory2 , filename } = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/app/${directory}/${directory2}/${filename}`))
})

app.get('/static/:filename',(req,res,next) => {
  const {filename} = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/static/${filename}`))
})

app.get('/page-data/:filename',(req,res,next) => {
  const {filename} = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/page-data/${filename}`))
})

app.get('/page-data/:directory/:filename',(req,res,next) => {
  const { filename , directory } = req.params
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/page-data/${directory}/page-data.json`))
})

app.get('/Login',(req,res,next) =>{
  res.sendFile(path.join(__dirname,`/frontend/Gatsby/Acavados/Login/index.html`))
})

app.use(passport.initialize());



app.use("/api/servicio/", require("./routes/ServiciosRoutes"));
app.use("/api/empleado/", require("./routes/EmpleadoRoutes"));
app.use("/api/cliente/", require("./routes/ClienteRoutes"));
app.use("/api/estado/", require("./routes/EstadoRoutes"));
app.use("/api/modulo/", require("./routes/ModuloRoutes"));
app.use("/api/permiso/", require("./routes/PermisoRoutes"));
app.use("/api/persona/", require("./routes/PersonaRoutes"));
app.use("/api/rol/", require("./routes/RolRoutes"));
app.use("/api/rol-permiso/", require("./routes/RolPermisoRoutes"));
app.use("/api/tipo-cargo/", require("./routes/TipoCargoRoutes"));
app.use("/api/tipo-servicio/", require("./routes/TipoServicioRoutes"));
app.use("/api/trabajos/", require("./routes/TrabajosRoutes"));
app.use("/api/usuarios/", require("./routes/UsuariosRoutes"));
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
