"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// forEach // ----------------------

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Júlia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

// find // ----------------------

var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // true or false
});
console.log(paula);

// findIndex // ----------------------

var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // true or false
});
console.log(indiceDaPaula);

// every // ----------------------

alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);

// some // ----------------------

var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(alunos) {
  return aluno.curso === 'Backend';
};

// filter // ----------------------

var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];

// reduce // ----------------------

var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);