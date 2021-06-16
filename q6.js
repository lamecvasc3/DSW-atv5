const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const usuario1 = {
    nome: 'Rodrigo',
    idade: 37,
    endereco: {
    cidade: 'Mossoró',
    uf: 'PB',
    pais: 'Brasil',
    } };


const usuario2 = {...usuario1, nome: "Joao"}

const usuario3 ={
    ...usuario1,
    endereco: {cidade: 'Russas'}
  }
console.log(usuario3)