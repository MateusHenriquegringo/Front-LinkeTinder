import { Modal } from "./ModalClass.js"

const buttonOpenModalEmpresa = document.getElementById('cadastrarEmpresa')
const submitEmpresa = document.getElementById("submitEmpresa")
const modalEmpresa = document.getElementById('modalEmpresa')
const buttonCloseEmpresa = document.getElementById("btnCloseEmpresa")

const selectOption = document.getElementById("escolhaEmpresa")

export class Empresa {

    constructor (
        public nome: string,
        public email: string,
        public cep: string,
        public cidade: string,
        public estadoFederativo: string
    ){
    }

}

const modal: Modal = new Modal(buttonOpenModalEmpresa, modalEmpresa, buttonCloseEmpresa)


submitEmpresa?.addEventListener('click', (e) => {
    e.preventDefault()

    const uniqueKey: string = `empresaData_${new Date().getTime()}`;

    const data: Empresa = collectNovaEmpresaData()

    const option = document.createElement('option')
    option.value = data.nome
    option.text = data.nome

    selectOption?.appendChild(option)

    localStorage.setItem(uniqueKey, JSON.stringify(data))
    alert("dados salvos com sucesso")
})


function collectNovaEmpresaData(): Empresa {

    const nome = document.getElementById('empresaNome') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const cep = document.getElementById('cep') as HTMLInputElement
    const cidade = document.getElementById('cidade') as HTMLInputElement
    const estado = document.getElementById('estadoFederativo') as HTMLInputElement

    return new Empresa(nome.value, email.value, cep.value, cidade.value, estado.value)

}
