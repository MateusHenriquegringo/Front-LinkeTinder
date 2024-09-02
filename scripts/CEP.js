"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cepInput = document.getElementById("cep");
cepInput === null || cepInput === void 0 ? void 0 : cepInput.addEventListener('keyup', (e) => {
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
function getCepData(cep, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = yield response.json();
            callback(data);
        }
        catch (e) {
            console.log(e);
        }
    });
}
function autocompleteInputs(data) {
    const city = document.getElementById("cidade");
    const state = document.getElementById("estadoFederativo");
    city.value = data.localidade;
    state.value = data.uf;
}
