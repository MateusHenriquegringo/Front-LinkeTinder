import { ModalCandidato } from "./ModalClass.js"
import { Candidato, CandidatoJSON } from "./CandidatoClass.js"
import { VagaJSON } from "./VagaClass.js"
import { fetchPefix, LocalStorage } from "./LocalStorage.js"


const submitButtonCandidato: HTMLElement | null = document.getElementById("submit")
const competenciasButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("competencia-btn")
const modalCandidato: HTMLElement | null = document.getElementById("modalCandidato")
const closeCandidatoButton: HTMLElement | null = document.getElementById("btnCloseCandidato")
const btnOpenModalCandidato: HTMLElement | null = document.getElementById("cadastrarCandidato")
const vagas: HTMLElement | null = document.getElementById("vagas")


const nome = document.getElementById('nome') as HTMLInputElement
const email = document.getElementById('email') as HTMLInputElement
const cpf = document.getElementById('cpf') as HTMLInputElement
const telefone = document.getElementById('telefone') as HTMLInputElement
const linkedin = document.getElementById('linkedin') as HTMLInputElement
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


const candidato: Candidato = new Candidato(nome, email, cpf, telefone,linkedin, cep, cidade, estadoFederativo, formacao, competenciasButtons)


submitButtonCandidato?.addEventListener('click', (e) => {

    e.preventDefault()

    try {
        const uniqueKey: string = `candidatoData_${new Date().getTime()}`;
        const data: CandidatoJSON = candidato.collectCandidatoData()
    
        localStorage.setItem(uniqueKey, JSON.stringify(data))
        alert("dados salvos com sucesso")

    } catch (erro) {
        if (erro instanceof Error) alert(erro.message)
    }


    modal.clearCompetenciasStyle()

})

function buildHtmlListOfVagas() {

    const vagasJson: VagaJSON[] = LocalStorage.fetchOnLocalStorage<VagaJSON>(fetchPefix.VAGAS)

    vagasJson.forEach(
        vaga => {
            const newVaga = document.createElement('li');
            newVaga.innerHTML = `

            <div class="vagas">
                    <div class="nome">
                        <p>Vaga:</p>
                        <span>${vaga.nome}</span>
                    </div>
                    <div class="descricao">
                        <p>Descricao:</p>
                        <span>${vaga.descricao}</span>                        
                    </div>
            </div>
          
        `;

            vagas?.appendChild(newVaga)
        }

    )

}
buildHtmlListOfVagas()

