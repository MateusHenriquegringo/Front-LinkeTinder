const submitButtonCandidato: HTMLElement | null = document.getElementById("submit")
const competenciasButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("competencia-btn")
const modalCandidato: HTMLElement | null = document.getElementById("modalCandidato")
const closeCandidatoButton : HTMLElement | null = document.getElementById("btnCloseCandidato")
const btnOpenModalCandidato: HTMLElement | null = document.getElementById("cadastrarCandidato")


btnOpenModalCandidato?.addEventListener('click', (e)=> {
    e.preventDefault()

    openCandidatoModal()

})

function openCandidatoModal(): void {
    modalCandidato ? modalCandidato.style.display = "flex" : console.log("erro")
}

function closeCandidatoModal(): void {
    modalCandidato ? modalCandidato.style.display = "none" : console.log("erro")
}

modalCandidato?.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == modalCandidato || e.target == closeCandidatoButton) {
        closeCandidatoModal()
    }
}
)

Array.from(competenciasButtons).forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});



function clearCompetenciasStyle(): void {
    Array.from(competenciasButtons).forEach(button => {
        button.classList.remove('selected')
    });
}


interface Candidato {

    nome: string,
    email: string,
    cep: string,
    cidade: string,
    estado: string,
    formacao: string,
    competencias: Array<string>

}

function collectCompetencias(): string[] {
    return Array.from(competenciasButtons)
        .filter(competenciasButton => competenciasButton.classList.contains('selected'))
        .map(competencia => competencia.textContent?.trim() ?? "");
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
        competencias: collectCompetencias()

    };

    return candidatoData

}

submitButtonCandidato?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `candidatoData_${new Date().getTime()}`;

    const data: Candidato = collectCandidatoData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))
    
    alert("dados salvos com sucesso")

    clearCompetenciasStyle()

})
