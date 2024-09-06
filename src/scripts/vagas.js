import { fetchPefix, LocalStorage } from "./LocalStorage.js";
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
submitButtonVaga?.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = vaga.collectVagaData();
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
function buildHtmlList() {
    const candidatos = LocalStorage.fetchOnLocalStorage(fetchPefix.CANDIDATOS);
    candidatos.forEach(candidato => {
        const newCandidato = document.createElement('li');
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
        candidatosUl?.appendChild(newCandidato);
    });
}
buildHtmlList();
