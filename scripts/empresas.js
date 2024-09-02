"use strict";
const button = document.getElementById("anunciarVaga");
const modal = document.getElementById("vagaModal");
const closeButton = document.getElementsByClassName("close")[0];
const form = document.getElementById('vagaForm');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
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
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(vagaData));
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
