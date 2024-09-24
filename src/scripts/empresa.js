import { Empresa } from "./EmpresaClass.js";
import { fetchPefix, LocalStorage } from "./LocalStorage.js";
import { Modal } from "./ModalClass.js";
// modal
const buttonOpenModalEmpresa = document.getElementById('cadastrarEmpresa');
const submitEmpresa = document.getElementById("submitEmpresa");
const modalEmpresa = document.getElementById('modalEmpresa');
const buttonCloseEmpresa = document.getElementById("btnCloseEmpresa");
// empresa
const nome = document.getElementById('empresaNome');
const email = document.getElementById('email');
const cnpj = document.getElementById('cnpj');
const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estadoFederativo');
const selectOption = document.getElementById("escolhaEmpresa");
new Modal(buttonOpenModalEmpresa, modalEmpresa, buttonCloseEmpresa);
const empresa = new Empresa(nome, email, cnpj, cep, cidade, estado);
submitEmpresa?.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `empresaData_${new Date().getTime()}`;
    try {
        const data = empresa.collectEmpresaData();
        localStorage.setItem(uniqueKey, JSON.stringify(data));
        LocalStorage.buildOptionHTMLFromLocalStorage(selectOption, fetchPefix.EMPRESAS);
        alert("dados salvos com sucesso");
    }
    catch (erro) {
        if (erro instanceof Error)
            alert(erro.message);
    }
});
