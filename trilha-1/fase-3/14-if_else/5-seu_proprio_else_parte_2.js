function obtenhaMensagemVotacao(idade) {
    if (idade >= 16) {
        return true
    } else {
        return false
    }
}

// Não modifique as linhas abaixo
console.log(obtenhaMensagemVotacao(20))
console.log(obtenhaMensagemVotacao(10))