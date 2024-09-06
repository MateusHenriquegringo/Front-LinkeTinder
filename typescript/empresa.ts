import { Empresa, EmpresaJSON } from "./EmpresaClass.js"
import { LocalStorage } from "./LocalStorage.js"
import { Modal } from "./ModalClass.js"

const myChartElement = document.getElementById("myChart") as HTMLCanvasElement

// modal
const buttonOpenModalEmpresa = document.getElementById('cadastrarEmpresa')
const submitEmpresa = document.getElementById("submitEmpresa")
const modalEmpresa = document.getElementById('modalEmpresa')
const buttonCloseEmpresa = document.getElementById("btnCloseEmpresa")

// empresa
const nome = document.getElementById('empresaNome') as HTMLInputElement
const email = document.getElementById('email') as HTMLInputElement
const cep = document.getElementById('cep') as HTMLInputElement
const cidade = document.getElementById('cidade') as HTMLInputElement
const estado = document.getElementById('estadoFederativo') as HTMLInputElement

const selectOption = document.getElementById("escolhaEmpresa")

new Modal(buttonOpenModalEmpresa, modalEmpresa, buttonCloseEmpresa)

const empresa : Empresa = new Empresa(nome, email, cep, cidade, estado)

submitEmpresa?.addEventListener('click', (e) => {
    e.preventDefault()

    const uniqueKey: string = `empresaData_${new Date().getTime()}`;

    const data: EmpresaJSON = empresa.collectEmpresaData()

    const option = document.createElement('option')
    option.value = data.nome
    option.text = data.nome

    selectOption?.appendChild(option)

    localStorage.setItem(uniqueKey, JSON.stringify(data))
    alert("dados salvos com sucesso")
})
