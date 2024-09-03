
const submitButtonVaga = document.getElementById("submit")

const form = document.getElementById("vagaForm") as HTMLFormElement



interface VagaDeEmprego {
    nome: string,
    descricao: string,
    empresa: string
    email: string
    cep: string
    cidade: string
    estadoFederativo: string
}

function collectVagaData(): VagaDeEmprego{
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

    return vagaData
}

submitButtonVaga?.addEventListener('click', (e) => {

    e.preventDefault()

    const uniqueKey: string = `vagaData_${new Date().getTime()}`;

    const data: VagaDeEmprego = collectVagaData()

    localStorage.setItem(uniqueKey, JSON.stringify(data))

    alert("dados salvos com sucesso")

})





