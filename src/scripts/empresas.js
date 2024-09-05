"use strict";
const candidatosUl = document.getElementById("candidatos");
const submitButtonVaga = document.getElementById("submit");
const buttonOpenModalVaga = document.getElementById("cadastrarVaga");
const closeVagaButton = document.getElementById("btnCloseVaga");
const modalVaga = document.getElementById("modalVaga");
buttonOpenModalVaga === null || buttonOpenModalVaga === void 0 ? void 0 : buttonOpenModalVaga.addEventListener('click', function (e) {
    e.preventDefault();
    openVagaModal();
});
document.addEventListener('load', (e) => {
    console.log("oi");
    buildHtmlList();
});
function openVagaModal() {
    modalVaga ? modalVaga.style.display = "flex" : console.log("erro");
}
function closeVagaModal() {
    modalVaga ? modalVaga.style.display = "none" : console.log("erro");
}
modalVaga === null || modalVaga === void 0 ? void 0 : modalVaga.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modalVaga || e.target == closeVagaButton) {
        closeVagaModal();
    }
});
function collectVagaData() {
    const nomeVaga = document.getElementById('nomeVaga');
    const descricao = document.getElementById('descricao');
    const empresa = document.getElementById('escolhaEmpresa');
    const vagaData = {
        nome: nomeVaga.value,
        descricao: descricao.value,
        empresa: empresa.value
    };
    return vagaData;
}
submitButtonVaga === null || submitButtonVaga === void 0 ? void 0 : submitButtonVaga.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = collectVagaData();
    try {
        const escolhaEmpresa = document.getElementById("escolhaEmpresa");
        localStorage.setItem(uniqueKey, JSON.stringify(data));
        const option = document.createElement("option");
        option.value = data.nome.charAt(0).toUpperCase();
        option.text = option.value;
        escolhaEmpresa === null || escolhaEmpresa === void 0 ? void 0 : escolhaEmpresa.appendChild(option);
        alert("dados salvos com sucesso");
    }
    catch (e) {
        console.log(e);
    }
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
