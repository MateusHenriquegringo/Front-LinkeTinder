const addEmpresa = document.getElementById('cadastrarEmpresa');
const submitEmpresa = document.getElementById("submitEmpresa");
const modalEmpresa = document.getElementById('modalEmpresa');
const buttonCloseEmpresaModal = document.getElementById("btnCloseEmpresa");
const selectOption = document.getElementById("escolhaEmpresa");
export class Empresa {
    constructor(nome, email, cep, cidade, estadoFederativo) {
        this.nome = nome;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.estadoFederativo = estadoFederativo;
    }
}
addEmpresa === null || addEmpresa === void 0 ? void 0 : addEmpresa.addEventListener('click', (e) => {
    e.preventDefault();
    openEmpresaModal();
});
function openEmpresaModal() {
    modalEmpresa ? modalEmpresa.style.display = "flex" : console.log("erro");
}
function closeEmpresaModal() {
    modalEmpresa ? modalEmpresa.style.display = "none" : console.log("erro");
}
submitEmpresa === null || submitEmpresa === void 0 ? void 0 : submitEmpresa.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `empresaData_${new Date().getTime()}`;
    const data = collectNovaEmpresaData();
    const option = document.createElement('option');
    option.value = data.nome;
    option.text = data.nome;
    selectOption === null || selectOption === void 0 ? void 0 : selectOption.appendChild(option);
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
function collectNovaEmpresaData() {
    const nome = document.getElementById('empresaNome');
    const email = document.getElementById('email');
    const cep = document.getElementById('cep');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estadoFederativo');
    return new Empresa(nome.value, email.value, cep.value, cidade.value, estado.value);
}
modalEmpresa === null || modalEmpresa === void 0 ? void 0 : modalEmpresa.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modalEmpresa || e.target == buttonCloseEmpresaModal) {
        closeEmpresaModal();
    }
});
