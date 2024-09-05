export class Empresa {
    constructor(nome, email, cep, cidade, estadoFederativo) {
        this.nome = nome;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.estadoFederativo = estadoFederativo;
    }
    collectEmpresaData() {
        return {
            nome: this.nome.value,
            email: this.email.value,
            cep: this.cep.value,
            cidade: this.cidade.value,
            estado: this.estadoFederativo.value
        };
    }
}
