const fs = require('fs')
const ca = fs.readFileSync('./www_acavadosserviciosgenerales_com.ca-bundle')
const crt = fs.readFileSync('./www_acavadosserviciosgenerales_com.crt')
const key = fs.readFileSync('./acavadosserviciosgenerales_com.key')

const SSL = {
 crt,ca,key
}

module.exports = SSL
