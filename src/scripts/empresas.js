"use strict";
const submitButtonVaga = document.getElementById("submit");
const form = document.getElementById("vagaForm");
function collectVagaData() {
    const nomeVaga = document.getElementById('nomeVaga');
    const descricao = document.getElementById('descricao');
    const empresa = document.getElementById('empresa');
    const email = document.getElementById('email');
    const cep = document.getElementById('cep');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estadoFederativo');
    const vagaData = {
        nome: nomeVaga.value,
        descricao: descricao.value,
        empresa: empresa.value,
        email: email.value,
        cep: cep.value,
        cidade: cidade.value,
        estadoFederativo: estado.value
    };
    return vagaData;
}
submitButtonVaga === null || submitButtonVaga === void 0 ? void 0 : submitButtonVaga.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = collectVagaData();
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
function fetchDataOnLocalStorage() {
    let candidatos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('candidatoData_')) {
            const jsonString = localStorage.getItem(key);
            if (jsonString)
                candidatos.push(JSON.parse(jsonString));
        }
    }
    console.log(candidatos);
}
fetchDataOnLocalStorage();
