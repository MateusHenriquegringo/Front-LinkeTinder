const submitButtonCandidato : HTMLElement | null = document.getElementById("submit")
const competenciasButtons : HTMLCollectionOf<Element> = document.getElementsByClassName("competencia-btn")


function addClickListenersToButtons(buttons: HTMLCollectionOf<Element>) {
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });
}

addClickListenersToButtons(competenciasButtons);

interface Candidato {

    nome: string,
    email: string,
    cep: string,
    cidade: string,
    estado: string,
    formacao: string,

    competencias: Array<Competencias>

}
enum Competencias {
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    Python = "Python",
    Java = "Java",
    CSharp = "C#",
    PHP = "PHP",
    Kotlin = "Kotlin",
    Swift = "Swift",
    SQL = "SQL",
    NoSQL = "NoSQL",
    HTML = "HTML",
    CSS = "CSS",
    React = "React",
    Angular = "Angular",
    Vue = "Vue",
    NodeJS = "Node.js",
    SpringBoot = "Spring Boot",
    Django = "Django",
    Docker = "Docker",
    Kubernetes = "Kubernetes",
    AWS = "AWS",
    Azure = "Azure",
    Git = "Git",
    DevOps = "DevOps",
    TDD = "Test-Driven Development",
    CI_CD = "Continuous Integration/Continuous Delivery"
}

// function collectCandidatoData(): Candidato {
//     const nomeVaga = document.getElementById('nomeVaga') as HTMLInputElement
//     const descricao = document.getElementById('descricao') as HTMLInputElement
//     const empresa = document.getElementById('empresa') as HTMLInputElement
//     const email = document.getElementById('email') as HTMLInputElement
//     const cep = document.getElementById('cep') as HTMLInputElement
//     const cidade = document.getElementById('cidade') as HTMLInputElement
//     const estado = document.getElementById('estadoFederativo') as HTMLInputElement

//     const vagaData: VagaDeEmprego = {
//         nome: nomeVaga.value,
//         descricao: descricao.value,
//         empresa: empresa.value,
//         email: email.value,
//         cep: cep.value,
//         cidade: cidade.value,
//         estadoFederativo: estado.value
//     };

// }

// submitButtonCandidato?.addEventListener('click', (e) => {

//     e.preventDefault()

//     const uniqueKey: string = `candidatoData_${new Date().getTime()}`;

//     const data: Candidato = collectCandidatoData()

//     localStorage.setItem(uniqueKey, JSON.stringify(data))

//     alert("dados salvos com sucesso")

// })
