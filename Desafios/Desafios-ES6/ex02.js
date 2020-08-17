// 2º exercício
// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

// 2.1 Utilizando o map
//  Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]


const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
];


var idade = [];

idade.push(usuarios.map((item) => item.idade))

console.log('Resultado', idade); //  [23, 15, 30]

// ------------------ /\/\/\/\/\\/\/\/\/\/\ -------------//


// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18  anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var diego = [];

diego = usuarios.filter((item) => {
    return item.idade > 20 && item.empresa == "Rocketseat";
});

console.log('Resultado', diego); //anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const google = usuarios.find((item) => {
    return item.empresa == "Google";
});

console.log('Resultado', google); //undefined



// 2.4 Unindo operações
//  Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

var age = (usuarios.map(({ nome, idade, empresa }) => {
    const age = {
        nome,
        idade: idade * 2,
        empresa
    }

    return age
})).filter((item) => { return item.idade <= 50 })


console.log('Resultado', age) // Resultado:
// [    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//      { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]

