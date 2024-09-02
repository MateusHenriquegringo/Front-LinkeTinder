import { modal } from "./main.js"
import { openModal } from "./main.js"
import { closeModal } from "./main.js"

const button = document.getElementById("anunciarVaga")
const closeButton = document.getElementsByClassName("close")[0]

const submitButton = document.getElementById("submit")

const form = document.getElementById("vagaForm") as HTMLFormElement

button?.addEventListener('click', function (e) {

    e.preventDefault()
    openModal()

})

interface VagaDeEmprego {
    nome: string,
    descricao: string,
    empresa: string
    email: string
    cep: string
    cidade: string
    estadoFederativo: string
}

function collectData(): VagaDeEmprego{
    const nomeVaga = document.getElementById('nomeVaga') as HTMLInputElement
    const descricao = document.getElementById('descricao') as HTMLInputElement
    const empresa = document.getElementById('empresa') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const cep = document.getElementById('cep') as HTMLInputElement
    const cidade = document.getElementById('cidade') as HTMLInputElement
    const estado = document.getElementById('estadoFederativo') as HTMLInputElement

    const vagaData: VagaDeEmprego = {
        nome: nomeVaga.value,
        descricao: descricao.value,
        empresa: empresa.value,
        email: email.value,
        cep: cep.value,
        cidade: cidade.value,
        estadoFederativo: estado.value
    };

    return vagaData
}

submitButton?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `vagaData_${new Date().getTime()}`;

    const data: VagaDeEmprego = collectData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))

    alert("dados salvos com sucesso")

})


modal?.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == modal || e.target == closeButton) {
        closeModal()
    }
}
)


