const fs = require('fs')

const ca = fs.readFileSync('./www_acavadosserviciosgenerales.ca-bundle')
const crt = fs.readFileSync('./www_acavadosserviciosgenerales.crt')


const SSL = {
    crt,
    ca
}

module.exports = SSL