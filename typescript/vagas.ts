import { CandidatoJSON } from "./CandidatoClass.js"
import { fetchPefix, LocalStorage } from "./LocalStorage.js"
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


function buildHtmlList() {    

    const candidatos: CandidatoJSON[] = LocalStorage.fetchOnLocalStorage<CandidatoJSON>(fetchPefix.CANDIDATOS)

    candidatos.forEach(
            candidato => {
                const newCandidato = document.createElement('li');
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

buildHtmlList()