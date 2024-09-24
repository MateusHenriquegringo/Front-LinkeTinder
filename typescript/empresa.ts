import { Empresa, EmpresaJSON } from "./EmpresaClass.js"
import { fetchPefix, LocalStorage } from "./LocalStorage.js"
import { Modal } from "./ModalClass.js"

// modal
const buttonOpenModalEmpresa = document.getElementById('cadastrarEmpresa')
const submitEmpresa = document.getElementById("submitEmpresa")
const modalEmpresa = document.getElementById('modalEmpresa')
const buttonCloseEmpresa = document.getElementById("btnCloseEmpresa")

// empresa
const nome = document.getElementById('empresaNome') as HTMLInputElement
const email = document.getElementById('email') as HTMLInputElement
const cnpj = document.getElementById('cnpj') as HTMLInputElement
const cep = document.getElementById('cep') as HTMLInputElement
const cidade = document.getElementById('cidade') as HTMLInputElement
const estado = document.getElementById('estadoFederativo') as HTMLInputElement

const selectOption = document.getElementById("escolhaEmpresa") as HTMLInputElement

new Modal(buttonOpenModalEmpresa, modalEmpresa, buttonCloseEmpresa)

const empresa: Empresa = new Empresa(nome, email, cnpj, cep, cidade, estado)

submitEmpresa?.addEventListener('click', (e) => {
    e.preventDefault()

    const uniqueKey: string = `empresaData_${new Date().getTime()}`;

    try {
        const data: EmpresaJSON = empresa.collectEmpresaData()

        localStorage.setItem(uniqueKey, JSON.stringify(data))

        LocalStorage.buildOptionHTMLFromLocalStorage(selectOption, fetchPefix.EMPRESAS)

        alert("dados salvos com sucesso")
    } catch (erro) {
        if (erro instanceof Error) alert(erro.message)
    }

})


