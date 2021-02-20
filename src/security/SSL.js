const fs = require('fs')
const path = require('path')
const ca = fs.readFileSync(path.join(__dirname,'/www_acavadosserviciosgenerales_com.ca-bundle'))
const crt = fs.readFileSync(path.join(__dirname,'/www_acavadosserviciosgenerales_com.crt'))
const key = fs.readFileSync(path.join(__dirname,'/acavadosserviciosgenerales_com.key'))

const SSL = {
 crt,ca,key
}

module.exports = SSL
