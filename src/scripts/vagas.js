import { Modal } from "./ModalClass.js";
import { Vaga } from "./VagaClass.js";
const candidatosUl = document.getElementById("candidatos");
const submitButtonVaga = document.getElementById("submitVaga");
// vaga
const nomeVaga = document.getElementById('nomeVaga');
const descricao = document.getElementById('descricao');
const empresa = document.getElementById('escolhaEmpresa');
// modal
const buttonOpenModalVaga = document.getElementById("cadastrarVaga");
const buttonCloseVaga = document.getElementById("btnCloseVaga");
const modalVaga = document.getElementById("modalVaga");
new Modal(buttonOpenModalVaga, modalVaga, buttonCloseVaga);
const vaga = new Vaga(nomeVaga, descricao, empresa);
submitButtonVaga === null || submitButtonVaga === void 0 ? void 0 : submitButtonVaga.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = vaga.collectVagaData();
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
    return candidatos;
}
function buildHtmlList() {
    const newCandidato = document.createElement('li');
    fetchDataOnLocalStorage().forEach(candidato => {
        newCandidato.innerHTML = `
                <div class="candidato">
                    <div class="formacao">
                        <p>Formacao:</p>
                        <span>${candidato.formacao}</span>
                    </div>
                    <div class="competencias">
                        <p>Competencias:</p>
                        <ul>
                            ${candidato.competencias.map((comp) => `<li>${comp}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        candidatosUl === null || candidatosUl === void 0 ? void 0 : candidatosUl.appendChild(newCandidato);
    });
}
