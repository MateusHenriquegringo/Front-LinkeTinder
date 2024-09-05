import { Empresa } from "./EmpresaClass.js";
import { Modal } from "./ModalClass.js";
// modal
const buttonOpenModalEmpresa = document.getElementById('cadastrarEmpresa');
const submitEmpresa = document.getElementById("submitEmpresa");
const modalEmpresa = document.getElementById('modalEmpresa');
const buttonCloseEmpresa = document.getElementById("btnCloseEmpresa");
// empresa
const nome = document.getElementById('empresaNome');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estadoFederativo');
const selectOption = document.getElementById("escolhaEmpresa");
new Modal(buttonOpenModalEmpresa, modalEmpresa, buttonCloseEmpresa);
const empresa = new Empresa(nome, email, cep, cidade, estado);
submitEmpresa === null || submitEmpresa === void 0 ? void 0 : submitEmpresa.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `empresaData_${new Date().getTime()}`;
    const data = empresa.collectEmpresaData();
    const option = document.createElement('option');
    option.value = data.nome;
    option.text = data.nome;
    selectOption === null || selectOption === void 0 ? void 0 : selectOption.appendChild(option);
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
