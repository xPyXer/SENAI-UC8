const quantidadeAlunos = 14;

for(i = 0; i <= quantidadeAlunos; i++) {
    if (i === 0) {
        console.log(`Iniciando contagem`)
    } else if (i % 2 | 0) {
        console.log(`O número é impar ${i}`)
    } else {
        console.log(`O número é par ${i}`)
    }
}