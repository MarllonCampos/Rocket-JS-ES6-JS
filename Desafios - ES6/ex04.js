
// 4º exercício
// 4.1 Desestruturação simples
// A partir do seguinte objeto:

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa


console.log(nome, cidade, estado) // 'Rocketseat' 'Rio do Sul' SC


// 4.2 Desestruturação em parâmetros
// Na seguinte função:

// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//}
//    mostraInfo({ nome: 'Diego', idade: 23 })

function mostraInfo({ nome, idade }) {
    return (`${nome} tem ${idade} anos.`);
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 })) // "Diego tem 23 anos"
