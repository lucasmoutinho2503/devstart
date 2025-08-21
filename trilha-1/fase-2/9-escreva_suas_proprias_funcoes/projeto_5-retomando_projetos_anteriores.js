// Defina as quatro funções aqui
function soma(a, b) {
  return a + b
}

function subtrai(a, b) {
  return a - b
}

function multiplica(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

// Escreva as funções aqui
function obtenhaNumeroDeCaracteres(nome) {
  return nome.length
}

function obtenhaNomeMinusculo(nome) {
  return nome.toLowerCase()
}

function obtenhaNomeMaiusculo(nome) {
  return nome.toUpperCase()
}

// Escreva as funções aqui
function obtenhaMensagem(compra) {
  if(compra < 0) {
    return "Número inválido"
  } else if (compra === 0) {
    return "Você não tem nenhum item em sua lista de compras"
  } else if (compra === 1) {
    return "Você tem 1 item em sua lista de compras"
  } else {
    return "Você tem mais de 1 item em sua lista de compras"
  }
}