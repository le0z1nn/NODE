let estado = function (a){
    if(a == "sp"|| a == 'rs'){
        return "estado autorizado"
    } else{
        return "estado recusado"
    }
}

module.exports = estado