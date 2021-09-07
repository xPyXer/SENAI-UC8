var Nomes = ['Helena', 'Chico', 'Mario', 'Maria' ]
console.log('Nomes: ')


var quantidadeNomes = Nomes.length;

if(quantidadeNomes < 5) {
    Nomes.push('José')
} else {
    console.log('Não será possível inserir mais alunos na turma.')
}

function imprimir(Nomes, indice,){
    console.log(indice + ' - ' + Nomes)
}
Nomes.forEach(function(Nomes, indice){
    console.log(`${indice} - ${Nomes}`)
});