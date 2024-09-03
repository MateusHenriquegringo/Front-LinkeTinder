"use strict";
const submitButtonCandidato = document.getElementById("submit");
const competenciasButtons = document.getElementsByClassName("competencia-btn");
function addClickListenersToButtons(buttons) {
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });
}
addClickListenersToButtons(competenciasButtons);
var Competencias;
(function (Competencias) {
    Competencias["JavaScript"] = "JavaScript";
    Competencias["TypeScript"] = "TypeScript";
    Competencias["Python"] = "Python";
    Competencias["Java"] = "Java";
    Competencias["CSharp"] = "C#";
    Competencias["PHP"] = "PHP";
    Competencias["Kotlin"] = "Kotlin";
    Competencias["Swift"] = "Swift";
    Competencias["SQL"] = "SQL";
    Competencias["NoSQL"] = "NoSQL";
    Competencias["HTML"] = "HTML";
    Competencias["CSS"] = "CSS";
    Competencias["React"] = "React";
    Competencias["Angular"] = "Angular";
    Competencias["Vue"] = "Vue";
    Competencias["NodeJS"] = "Node.js";
    Competencias["SpringBoot"] = "Spring Boot";
    Competencias["Django"] = "Django";
    Competencias["Docker"] = "Docker";
    Competencias["Kubernetes"] = "Kubernetes";
    Competencias["AWS"] = "AWS";
    Competencias["Azure"] = "Azure";
    Competencias["Git"] = "Git";
    Competencias["DevOps"] = "DevOps";
    Competencias["TDD"] = "Test-Driven Development";
    Competencias["CI_CD"] = "Continuous Integration/Continuous Delivery";
})(Competencias || (Competencias = {}));
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
