// Sistemas de cadastro de peças
var pecas = ['Peca de teste', 'AB', 'PecaA']


// Informar o peso da peça
var Peso = 200 
console.log(`O peso da peça é ${Peso} gramas`)
if (Peso < 100) {
    console.log('Não foi possível cadastrar, peso inferior a 100 gramas.')
} else {
    console.log('Peso suficiente, prossiga com o cadastro!')
}

// Informar o nome da peça, se o tamanho for menor de 3 não cadastrar
var Nome = ('PecaB')
pecas.join(Nome)

console.log(`Letras = ${Nome.length}`)
if (Nome.length <= 3) {
    console.log("Não foi possível cadastrar, nome inferior a 3 letras.")
} else {
    console.log('Total de letras suficientes, prossiga com o cadastro!')
}

// Verifica a quantidade de peças, se for inferior a 10, imprima erro
console.log(`O número total de peças é ${pecas.length}`)
if (pecas >= 10) {
    console.log('Espaço insuficiente para total de peças.')
} else {
    console.log('Espaço suficiente!')
}; 

console.log('Cadastro concluído!')