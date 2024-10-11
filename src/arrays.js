const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// forEach // ----------------------

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Júlia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2);

// find // ----------------------

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // true or false
})

console.log(paula);

// findIndex // ----------------------

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' // true or false
})
console.log(indiceDaPaula);

// every // ----------------------

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

// some // ----------------------

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

const filtraAlunosDeBackend2 = alunos => aluno.curso === 'Backend';

// filter // ----------------------

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

// reduce // ----------------------

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')
console.log(nomeDosAlunos);