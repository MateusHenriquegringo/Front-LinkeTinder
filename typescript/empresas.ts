const candidatosUl = document.getElementById("candidatos")
const submitButtonVaga = document.getElementById("submit")


const buttonOpenModalVaga = document.getElementById("cadastrarVaga")
const closeVagaButton = document.getElementById("btnCloseVaga")
const modalVaga = document.getElementById("modalVaga")


buttonOpenModalVaga?.addEventListener('click', function (e) {
    
    e.preventDefault()
    openVagaModal()

})


function openVagaModal(): void {
    modalVaga ? modalVaga.style.display = "flex" : console.log("erro")

}

function closeVagaModal(): void {
    modalVaga ? modalVaga.style.display = "none" : console.log("erro")
}

modalVaga?.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == modalVaga || e.target == closeVagaButton) {
        closeVagaModal()
    }
}
)
interface VagaDeEmprego {
    nome: string,
    descricao: string,
    empresa: string
}

function collectVagaData(): VagaDeEmprego {
    const nomeVaga = document.getElementById('nomeVaga') as HTMLInputElement
    const descricao = document.getElementById('descricao') as HTMLInputElement
    const empresa = document.getElementById('escolhaEmpresa') as HTMLInputElement


    const vagaData: VagaDeEmprego = {
        nome: nomeVaga.value,
        descricao: descricao.value,
        empresa: empresa.value
    };

    return vagaData
}

submitButtonVaga?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `vagaData_${new Date().getTime()}`;

    const data: VagaDeEmprego = collectVagaData()

    try {

        const escolhaEmpresa = document.getElementById("escolhaEmpresa")

        localStorage.setItem(uniqueKey, JSON.stringify(data))

        const option = document.createElement("option")
        option.value = data.nome.charAt(0).toUpperCase()
        option.text = option.value

        escolhaEmpresa?.appendChild(option)

        alert("dados salvos com sucesso")

    } catch (e) { console.log(e) }
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

