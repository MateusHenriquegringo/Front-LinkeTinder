const button = document.getElementById("anunciarVaga")
const modal = document.getElementById("vagaModal")
const closeButton = document.getElementsByClassName("close")[0]

const form = document.getElementById('vagaForm')

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

form?.addEventListener('submit', (e) => {
    e.preventDefault()

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

    const uniqueKey: string = `vagaData_${new Date().getTime()}`;

    localStorage.setItem(uniqueKey, JSON.stringify(vagaData))
    
    alert("dados salvos com sucesso")

})


modal?.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == modal || e.target == closeButton) {
        closeModal()
    }
}
)


function openModal(): void {
    modal ? modal.style.display = "flex" : console.log("erro")
}

function closeModal(): void {
    modal ? modal.style.display = "none" : console.log("erro")
}



