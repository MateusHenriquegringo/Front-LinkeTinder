"use strict";
const cepInput = document.getElementById("cep");
cepInput?.addEventListener('keyup', (e) => {
    e.preventDefault();
    let cep = cepInput.value;
    if (validateCEP(cep)) {
        getCepData(cep, autocompleteInputs);
    }
});
function validateCEP(cep) {
    cep = cep.replace(/\D/g, '');
    const REGEX = /^[0-9]{8}$/;
    return REGEX.test(cep);
}
async function getCepData(cep, callback) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        callback(data);
    }
    catch (e) {
        console.log(e);
    }
}
function autocompleteInputs(data) {
    const city = document.getElementById("cidade");
    const state = document.getElementById("estadoFederativo");
    city.value = data.localidade;
    state.value = data.uf;
}
