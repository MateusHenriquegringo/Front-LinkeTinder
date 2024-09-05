import { Modal } from "./ModalClass.js"
import { Vaga, VagaJSON } from "./VagaClass.js"


const candidatosUl = document.getElementById("candidatos")
const submitButtonVaga = document.getElementById("submitVaga")

// vaga
const nomeVaga = document.getElementById('nomeVaga') as HTMLInputElement
const descricao = document.getElementById('descricao') as HTMLInputElement
const empresa = document.getElementById('escolhaEmpresa') as HTMLInputElement

// modal
const buttonOpenModalVaga = document.getElementById("cadastrarVaga")
const buttonCloseVaga = document.getElementById("btnCloseVaga")
const modalVaga = document.getElementById("modalVaga")

new Modal(buttonOpenModalVaga, modalVaga, buttonCloseVaga)

const vaga: Vaga = new Vaga(nomeVaga, descricao, empresa)

submitButtonVaga?.addEventListener('click', (e) => {
    e.preventDefault()

    const uniqueKey: string = `vagaData_${new Date().getTime()}`;

    const data: VagaJSON = vaga.collectVagaData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))

    alert("dados salvos com sucesso")

}
)


function fetchDataOnLocalStorage(): CandidatoEmEmpresas[] {

    let candidatos: CandidatoEmEmpresas[] = []

    for (let i: number = 0; i < localStorage.length; i++) {

        const key: string | null = localStorage.key(i)

        if (key && key.startsWith('candidatoData_')) {
            const jsonString: string | null = localStorage.getItem(key)

            if (jsonString) candidatos.push(JSON.parse(jsonString))
        }

    }

    return candidatos

}

interface CandidatoEmEmpresas {
    formacao: string,
    competencias: string[]
}

function buildHtmlList() {

    const newCandidato = document.createElement('li');

    fetchDataOnLocalStorage().forEach(
        candidato => {
            newCandidato.innerHTML = `
                <div class="candidato">
                    <div class="formacao">
                        <p>Formacao:</p>
                        <span>${candidato.formacao}</span>
                    </div>
                    <div class="competencias">
                        <p>Competencias:</p>
                        <ul>
                            ${candidato.competencias.map((comp: string) => `<li>${comp}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;

            candidatosUl?.appendChild(newCandidato)
        }
    )
}

