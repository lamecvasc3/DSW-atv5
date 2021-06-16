const arr = [1, 2, 3, 4, 5]
arr.map(item => item + 10)



const usuario = { nome: 'Rodrigo', idade: 37 }
const mostraIdade = usuario => usuario.idade;



const nome = "Rodrigo"
const idade = 37;
const mostraUsuario = (nome = "Rodrigo", idade = 28) => (
    {nome, idade}
)


const promise = () => new Promise((resolve, reject) => resolve())