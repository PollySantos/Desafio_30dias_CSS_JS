const empresa = {
    nome: 'Resilia',
    endereco: {
        cidade: 'Navegantes',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Poliana', idade: 29 })