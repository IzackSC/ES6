// map
let meuMap = new Map();
meuMap.set("nome", "Izack");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"));

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack");

console.log(meuMap);

// nome => Izack
// stack => html, css, js


// set
const cpfs = new Set();

cpfs.add('81468602063')
cpfs.add('80623048094')
cpfs.add('78858556003')

console.log(cpfs);

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Izack Colvero', 'Gian Souza', 'Larissa Santana', 'Luana', 'Luana', 'Larissa Santana']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet)
console.log(arraySemItensDuplicados);