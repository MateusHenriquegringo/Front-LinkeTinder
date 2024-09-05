import { ModalCandidato } from "./ModalClass.js"

const submitButtonCandidato: HTMLElement | null = document.getElementById("submit")
const competenciasButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("competencia-btn")
const modalCandidato: HTMLElement | null = document.getElementById("modalCandidato")
const closeCandidatoButton: HTMLElement | null = document.getElementById("btnCloseCandidato")
const btnOpenModalCandidato: HTMLElement | null = document.getElementById("cadastrarCandidato")

const modal: ModalCandidato = new ModalCandidato(
     btnOpenModalCandidato,
     modalCandidato, 
     closeCandidatoButton,
     competenciasButtons
    )

interface Candidato {
    nome: string,
    email: string,
    cep: string,
    cidade: string,
    estado: string,
    formacao: string,
    competencias: Array<string>
}


function collectCandidatoData(): Candidato {
    const nome = document.getElementById('nome') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const cep = document.getElementById('cep') as HTMLInputElement
    const cidade = document.getElementById('cidade') as HTMLInputElement
    const estadoFederativo = document.getElementById('estadoFederativo') as HTMLInputElement
    const formacao = document.getElementById('formacao') as HTMLInputElement


    const candidatoData: Candidato = {

        nome: nome.value,
        email: email.value,
        cep: cep.value,
        cidade: cidade.value,
        estado: estadoFederativo.value,
        formacao: formacao.value,
        competencias: modal.collectCompetencias()

    };

    return candidatoData

}

submitButtonCandidato?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `candidatoData_${new Date().getTime()}`;

    const data: Candidato = collectCandidatoData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))

    alert("dados salvos com sucesso")

    modal.clearCompetenciasStyle()

})
