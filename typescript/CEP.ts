const cepInput = document.getElementById("cep") as HTMLInputElement

type responseCep = {
    localidade: string,
    uf: string
}

cepInput?.addEventListener('keyup', (e) => {
    e.preventDefault()

    let cep: string = cepInput.value

    if (validateCEP(cep)) { getCepData(cep, autocompleteInputs) }
    
    }
)


function validateCEP(cep: string): boolean {

    cep = cep.replace(/\D/g, '');

    const REGEX: RegExp = /^[0-9]{8}$/;

    return REGEX.test(cep);
}

async function getCepData(cep: string, callback: Function) : Promise<void> {

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`
        )

        const data: responseCep = await response.json()

        callback(data)

    } catch (e) { console.log(e) }

    
}


function autocompleteInputs(data: responseCep): void {
    
    const city = document.getElementById("cidade") as HTMLInputElement
    const state = document.getElementById("estadoFederativo") as HTMLInputElement

    city.value = data.localidade
    state.value = data.uf
}


