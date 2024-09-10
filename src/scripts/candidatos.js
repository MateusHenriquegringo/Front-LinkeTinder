import { ModalCandidato } from "./ModalClass.js";
import { Candidato } from "./CandidatoClass.js";
import { fetchPefix, LocalStorage } from "./LocalStorage.js";
const submitButtonCandidato = document.getElementById("submit");
const competenciasButtons = document.getElementsByClassName("competencia-btn");
const modalCandidato = document.getElementById("modalCandidato");
const closeCandidatoButton = document.getElementById("btnCloseCandidato");
const btnOpenModalCandidato = document.getElementById("cadastrarCandidato");
const vagas = document.getElementById("vagas");
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const telefone = document.getElementById('telefone');
const linkedin = document.getElementById('linkedin');
const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const estadoFederativo = document.getElementById('estadoFederativo');
const formacao = document.getElementById('formacao');
const modal = new ModalCandidato(btnOpenModalCandidato, modalCandidato, closeCandidatoButton, competenciasButtons);
const candidato = new Candidato(nome, email, cpf, telefone, linkedin, cep, cidade, estadoFederativo, formacao, competenciasButtons);
submitButtonCandidato?.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        const uniqueKey = `candidatoData_${new Date().getTime()}`;
        const data = candidato.collectCandidatoData();
        localStorage.setItem(uniqueKey, JSON.stringify(data));
        alert("dados salvos com sucesso");
    }
    catch (erro) {
        if (erro instanceof Error)
            alert(erro.message);
    }
    modal.clearCompetenciasStyle();
});
function buildHtmlListOfVagas() {
    const vagasJson = LocalStorage.fetchOnLocalStorage(fetchPefix.VAGAS);
    vagasJson.forEach(vaga => {
        const newVaga = document.createElement('li');
        newVaga.innerHTML = `

            <div class="vagas">
                    <div class="nome">
                        <p>Vaga:</p>
                        <span>${vaga.nome}</span>
                    </div>
                    <div class="descricao">
                        <p>Descricao:</p>
                        <span>${vaga.descricao}</span>                        
                    </div>
            </div>
          
        `;
        vagas?.appendChild(newVaga);
    });
}
buildHtmlListOfVagas();
