import { modal } from "./main.js";
import { openModal } from "./main.js";
import { closeModal } from "./main.js";
const button = document.getElementById("anunciarVaga");
const closeButton = document.getElementsByClassName("close")[0];
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
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modal || e.target == closeButton) {
        closeModal();
    }
});
