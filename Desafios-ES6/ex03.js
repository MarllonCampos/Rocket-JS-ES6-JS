// 3.1
//Converta as funções a baixo em Arrow Functions:

const arr = [1, 2, 3, 4, 5];

//arr.map(function(item) {
//  return item + 10;
// });

console.log('Resultado', arr.map((item) => item + 10))

// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

const mostraIdade = (usuario) => usuario.idade

console.log('Resultado', mostraIdade(usuario));



// 3.3
// Dica: Utilize uma constante pra function

const name = "Diego";
const age = 23

// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome)
const mostrarUsuario = (nome = "Diego", idade = 18) => ({ nome, idade })

console.log(mostrarUsuario(name, age))
console.log(mostrarUsuario(name))


// 3.4
// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     })
// }
// console.log(promise);

const promise = () => { new Promise((resolve, reject) => resolve()) }
console.log(promise)
