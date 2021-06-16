const usuarios = [
    { nome: 'Rafael', idade: 37, empresa: 'Google' },
    { nome: 'Pedro', idade: 35, empresa: 'Google' },
    { nome: 'Junior', idade: 23, empresa: 'Facebook' },
]

const idades = usuarios.map(usuario => usuario.idade)

//console.log(idades)

const google = usuarios.filter(
    usuario => usuario.empresa === "Google" && usuario.idade >= 35 
)

//console.log(google)

const microsoft =usuarios.find(
    usuario => usuario.empresa === "Microsoft"
)

console.log(microsoft)