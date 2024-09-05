import { ModalCandidato } from "./ModalClass.js";
const submitButtonCandidato = document.getElementById("submit");
const competenciasButtons = document.getElementsByClassName("competencia-btn");
const modalCandidato = document.getElementById("modalCandidato");
const closeCandidatoButton = document.getElementById("btnCloseCandidato");
const btnOpenModalCandidato = document.getElementById("cadastrarCandidato");
const modal = new ModalCandidato(btnOpenModalCandidato, modalCandidato, closeCandidatoButton, competenciasButtons);
function collectCompetencias() {
    return Array.from(competenciasButtons)
        .filter(competenciasButton => competenciasButton.classList.contains('selected'))
        .map(competencia => { var _a, _b; return (_b = (_a = competencia.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ""; });
}
function collectCandidatoData() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const cep = document.getElementById('cep');
    const cidade = document.getElementById('cidade');
    const estadoFederativo = document.getElementById('estadoFederativo');
    const formacao = document.getElementById('formacao');
    const candidatoData = {
        nome: nome.value,
        email: email.value,
        cep: cep.value,
        cidade: cidade.value,
        estado: estadoFederativo.value,
        formacao: formacao.value,
        competencias: collectCompetencias()
    };
    return candidatoData;
}
submitButtonCandidato === null || submitButtonCandidato === void 0 ? void 0 : submitButtonCandidato.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `candidatoData_${new Date().getTime()}`;
    const data = collectCandidatoData();
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
    modal.clearCompetenciasStyle();
});
