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

module.exports = {
    validarRows
}