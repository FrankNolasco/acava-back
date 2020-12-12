const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const morgan = require('morgan');
const { localSignin } = require('./controllers/local.strategy.controller');
const { login } = require('./controllers/user.controller');
const app = express()
const port = process.env.PORT | 5000
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(function(req,res,next){
    //acceso a conexiones que requieran a esta conexion
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-type,Accept','application/json','text/json');
    res.header('Access-Control-Allow-Methods','GET','POST');
    next();
});

app.use(passport.initialize());

passport.use('local-signin',new LocalStrategy( localSignin ));
app.post('/api/login' , passport.authenticate('local-signin',{ session:false }) , login );

app.listen(port, () => console.log(`Example app listening on port port!`))