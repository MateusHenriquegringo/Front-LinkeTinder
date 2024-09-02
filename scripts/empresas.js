"use strict";
const button = document.getElementById("anunciarVaga");
const modal = document.getElementById("vagaModal");
const closeButton = document.getElementsByClassName("close")[0];
const submitButton = document.getElementById("submit");
const form = document.getElementById("vagaForm");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});
function collectData() {
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
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = collectData();
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modal || e.target == closeButton) {
        closeModal();
    }
});
function openModal() {
    modal ? modal.style.display = "flex" : console.log("erro");
}
function closeModal() {
    modal ? modal.style.display = "none" : console.log("erro");
}
