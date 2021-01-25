const validarRows = (rows) => {
    if(Array.isArray(rows) && rows.length > 0){
        if(Array.isArray(rows[0]) && rows[0].length > 0){
            if(typeof rows[0][0] !== "undefined" && rows[0][0]){
                return true
            }else{
                return false
            }
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

const encontrarCabeceras = (req) => {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        try {
            const bearer = bearerHeader.split(" ");
            if(Array.isArray(bearer) && bearer.length >= 3){
                const token = bearer[1]
                const rol = bearer[2]
                if(parseInt(rol) > 0){
                    return { token , rol }
                }
                else{ 
                    return false
                }

            }else {
                return false
            }
        } catch (err) {
            return false
        }
    }else{
        return false
    }
}

module.exports = {
    validarRows , encontrarCabeceras
}