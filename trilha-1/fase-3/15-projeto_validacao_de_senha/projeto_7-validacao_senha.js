function senhaEValida(senha) {
    console.log(senha)
    if (senha.length > 10) {
        return true
    } else {
        return false
    }
}

function senhaEValida(senha) {
    console.log(senha)
    if (senha.trim().length > 10) {
        return true
    } else {
        return false
    }
}