import { ModalCandidato } from "./ModalClass.js"
import { Candidato, CandidatoJSON } from "./CandidatoClass.js"

const submitButtonCandidato: HTMLElement | null = document.getElementById("submit")
const competenciasButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("competencia-btn")
const modalCandidato: HTMLElement | null = document.getElementById("modalCandidato")
const closeCandidatoButton: HTMLElement | null = document.getElementById("btnCloseCandidato")
const btnOpenModalCandidato: HTMLElement | null = document.getElementById("cadastrarCandidato")


const nome = document.getElementById('nome') as HTMLInputElement
const email = document.getElementById('email') as HTMLInputElement
const cep = document.getElementById('cep') as HTMLInputElement
const cidade = document.getElementById('cidade') as HTMLInputElement
const estadoFederativo = document.getElementById('estadoFederativo') as HTMLInputElement
const formacao = document.getElementById('formacao') as HTMLInputElement

const modal: ModalCandidato = new ModalCandidato(
    btnOpenModalCandidato,
    modalCandidato,
    closeCandidatoButton,
    competenciasButtons
)


const candidato: Candidato = new Candidato(nome, email, cep, cidade, estadoFederativo, formacao, competenciasButtons)


submitButtonCandidato?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `candidatoData_${new Date().getTime()}`;

    const data : CandidatoJSON = candidato.collectCandidatoData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))

    alert("dados salvos com sucesso")

    modal.clearCompetenciasStyle()

})
